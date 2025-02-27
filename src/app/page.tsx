"use client"
import Navbar from "@/components/Navbar";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-100 to-teal-200 animate-gradient-xy"></div>
      
      <div className="relative">
        <Navbar />
        <HomeContent />
        
        <div className="absolute bottom-6 right-6 text-gray-500">
          www.loremipsum.com
        </div>
      </div>
    </main>
  );
}
