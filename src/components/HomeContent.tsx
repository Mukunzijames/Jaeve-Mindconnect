"use client"
import Image from "next/image";
import landingImage from "@/assets/9c54328f-5880-44f4-acf7-164ae5fa95db_removalai_preview.png";

const HomeContent = () => {
  return (
    <div className="px-6">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        {/* Left Content Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
              Mind
              <br />
              xonnects
            </h1>
            <p className="text-gray-600 text-lg mb-8">Landing Page Template</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300">
                <span>EXPLORE</span>
              </button>
              <button className="border border-gray-300 bg-white/30 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/50 transition-all duration-300">
                VIDEO PRESENTATION
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square max-w-[600px]">
            <Image 
              src={landingImage} 
              alt="Mind xonnects illustration" 
              fill
              className="object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent; 