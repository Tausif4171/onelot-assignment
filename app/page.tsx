import { BusinessGrowth } from "./components/BusinessGrowth";
import { CarFinancing } from "./components/CarFinancing";
import { DealerOperations } from "./components/DealerOperations";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <BusinessGrowth />
      <CarFinancing />
      <DealerOperations />
    </div>
  );
}
