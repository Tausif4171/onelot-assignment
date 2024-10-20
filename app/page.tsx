import { BusinessGrowth } from "./components/BusinessGrowth";
import { CarFinancing } from "./components/CarFinancing";
import { DealerOperations } from "./components/DealerOperations";
import { FAQs } from "./components/FAQs";
import { Footer } from "./components/Footer";
import { GetStarted } from "./components/GetStarted";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StayConnected } from "./components/StayConnected";
import { Testimonials } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <BusinessGrowth />
      <CarFinancing />
      <DealerOperations />
      <WhyChooseUs />
      <Testimonials />
      <StayConnected />
      <FAQs />
      <GetStarted />
      <Footer />
    </div>
  );
}
