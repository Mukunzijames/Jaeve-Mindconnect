"use client"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="text-2xl font-bold">○ Jaeve</div>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-600">HOME</a>
        <a href="#" className="text-gray-600">SERVICE</a>
        <a href="#" className="text-gray-600">TEAM</a>
        <a href="#" className="text-gray-600">CONTACT</a>
        <a href="#" className="text-gray-600">BLOG</a>
      </div>
      <div className="relative">
        <button className="px-6 py-2 rounded-full bg-black text-white relative group overflow-hidden">
          <span className="relative z-10">GET STARTED</span>
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient-xy"></div>
          </div>
          <div className="absolute -inset-px rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient-xy opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 