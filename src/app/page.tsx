import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClusterSection from "@/components/ClusterSection";
import KprCalculator from "@/components/KprCalculator";
import { Advantages, LocationGuide } from "@/components/Advantages";
import { AboutSection, Testimonials } from "@/components/AboutSection";
import { ContactSchedule, Footer } from "@/components/ContactSchedule";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClusterSection />
        <Advantages />
        <KprCalculator />
        <LocationGuide />
        <AboutSection />
        <Testimonials />
        <ContactSchedule />
      </main>
      <Footer />
    </div>
  );
}
