const Solution = ()=>{
    return(
        <section id="solution" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">Our Solutions</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* <!-- Solution Cards --> */}
                <div className="group animate__animated animate__fadeInUp">
                    <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 h-full">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
                            <div className="relative z-10">
                                <svg className="w-12 h-12 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <h3 className="text-2xl font-bold text-white mb-4">Digital Strategy</h3>
                                <p className="text-white/90 mb-6">Comprehensive digital transformation strategies tailored to your business needs.</p>
                                <ul className="space-y-3 text-white/80">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Market Analysis
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Digital Roadmap
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Implementation Plan
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 h-full">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
                            <div className="relative z-10">
                                <svg className="w-12 h-12 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                                <h3 className="text-2xl font-bold text-white mb-4">Process Optimization</h3>
                                <p className="text-white/90 mb-6">Streamline operations and enhance efficiency through modern solutions.</p>
                                <ul className="space-y-3 text-white/80">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Workflow Automation
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Resource Management
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Performance Tracking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                        <div className="bg-gradient-to-br from-pink-600 to-red-600 p-8 h-full">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
                            <div className="relative z-10">
                                <svg className="w-12 h-12 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                                </svg>
                                <h3 className="text-2xl font-bold text-white mb-4">Innovation Lab</h3>
                                <p className="text-white/90 mb-6">Cutting-edge solutions leveraging the latest technologies.</p>
                                <ul className="space-y-3 text-white/80">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        AI Integration
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        IoT Solutions
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Blockchain Development
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center">
                <a href="#contact" className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 animate__animated animate__pulse animate__infinite">
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
    )
} 


export default Solution;