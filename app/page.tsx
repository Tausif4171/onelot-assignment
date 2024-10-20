import { BusinessGrowth } from "./components/BusinessGrowth";
import { CarFinancing } from "./components/CarFinancing";
import { DealerOperations } from "./components/DealerOperations";
import { FAQs } from "./components/FAQs";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
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
      {/* <FAQs /> */}
    </div>
  );
}
