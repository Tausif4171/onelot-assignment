import { BusinessGrowth } from "./components/BusinessGrowth";
import { CarFinancing } from "./components/CarFinancing";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <BusinessGrowth />
      <div className="bg-[#F9FAFB]">
        <CarFinancing />
      </div>
    </div>
  );
}
