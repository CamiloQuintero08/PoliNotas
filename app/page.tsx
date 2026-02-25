import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Header />

      <SideBar />

      <section>
        <HeroSection />
      </section>

      <section>
        <MainContent />
      </section>

      

    </div>
  );
}
