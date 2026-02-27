
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import Sidebar from "@/components/layout/SideBar";
import { SidebarProvider } from "@/context/SidebarContext";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("nombre, apellido, avatar_url, rol")
    .eq("id", session.user.id)
    .single();

  const role = (profile?.rol ?? "estudiante") as "profesor" | "estudiante";

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <DashboardNavbar
          nombre={`${profile?.nombre ?? ""} ${profile?.apellido ?? ""}`.trim()}
          avatarUrl={profile?.avatar_url ?? null}
          rol={role}
        />
        <div className="flex pt-16">
          <Sidebar role={role} />
          <main className="flex-1 p-6 transition-all duration-300">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}