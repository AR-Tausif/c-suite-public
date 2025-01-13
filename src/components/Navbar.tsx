const Navbar = () => {
  // const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav id="nav" className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
                <h1 className="text-white font-bold text-xl">ServicePro</h1>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#overview" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Overview</a>
                    <a href="#concept" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Concept</a>
                    <a href="#solution" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Solution</a>
                    <a href="#leadership" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Leadership</a>
                    <a href="#experts" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Experts</a>
                    <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact</a>
                </div>
            </div>
            <div className="md:hidden">
                <button id="menu-btn" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path className="block" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div id="mobile-menu" className="hidden md:hidden bg-neutral-900">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#overview" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Overview</a>
            <a href="#concept" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Concept</a>
            <a href="#solution" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solution</a>
            <a href="#leadership" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Leadership</a>
            <a href="#experts" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Experts</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
