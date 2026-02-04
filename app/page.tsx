import HeroSection from '@/components/sections/hero-section';
import InsightFlowSection from '@/components/sections/insight-flow-section';
import DashboardSection from '@/components/sections/dashboard-section';
import WowSection from '@/components/sections/wow-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <InsightFlowSection />
      <DashboardSection />
      <WowSection />
      <Footer />
    </main>
  );
}
