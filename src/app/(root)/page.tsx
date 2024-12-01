import { Navbar } from "@/sections/root/Header";
import { Hero } from "@/sections/root/Hero";
import { Features } from "@/sections/root/Features";
import { Pricing } from "@/sections/root/Pricing";
import {Call_to_action} from "@/sections/root/Call_to_actiion";
import {Footer} from "@/sections/root/Footer";
import { Faqs } from "@/sections/root/FAQs";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Features/>
  <Pricing/>
  <Faqs/>
  <Call_to_action/>
  <Footer/>
  </>
);
}
