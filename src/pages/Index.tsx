import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Marquee from "@/components/Marquee";
import SignatureStyles from "@/components/SignatureStyles";
import WhyMuse from "@/components/WhyMuse";
import Transformations from "@/components/Transformations";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Marquee />
      <SignatureStyles />
      <WhyMuse />
      <Transformations />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
