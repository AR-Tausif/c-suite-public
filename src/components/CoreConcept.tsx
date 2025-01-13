const CoreConcept = ()=>{
return(
    <section id="concept" className="py-20 bg-neutral-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">Our Core Concepts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="">
            {/* <!-- Left side: Interactive tabs --> */}
            <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between items-center">
                    <div className="tab-buttons space-y-2">
                        <button className="concept-tab w-full text-left px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all active" data-tab="1">
                            Innovation Framework
                        </button>
                        <button className="concept-tab w-full text-left px-6 py-4 rounded-lg bg-neutral-700 text-gray-300 hover:bg-neutral-600 font-semibold transition-all" data-tab="2">
                            Digital Transformation
                        </button>
                        <button className="concept-tab w-full text-left px-6 py-4 rounded-lg bg-neutral-700 text-gray-300 hover:bg-neutral-600 font-semibold transition-all" data-tab="3">
                            Sustainable Growth
                        </button>
                    </div>

                    <div className="tab-content mt-6">
                        <div className="concept-content active" data-tab="1">
                            <h3 className="text-2xl font-bold text-white mb-4">Innovation Framework</h3>
                            <p className="text-gray-300">Our innovative approach combines cutting-edge technology with proven methodologies to deliver exceptional results. We focus on:</p>
                            <ul className="mt-4 space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Agile Development Process
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Rapid Prototyping
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Continuous Integration
                                </li>
                            </ul>
                        </div>

                        <div className="concept-content hidden" data-tab="2">
                            <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                            <p className="text-gray-300">We help organizations evolve in the digital age through:</p>
                            <ul className="mt-4 space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Cloud Integration
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    AI Implementation
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Process Automation
                                </li>
                            </ul>
                        </div>

                        <div className="concept-content hidden" data-tab="3">
                            <h3 className="text-2xl font-bold text-white mb-4">Sustainable Growth</h3>
                            <p className="text-gray-300">Creating long-term value through:</p>
                            <ul className="mt-4 space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Scalable Solutions
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Resource Optimization
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Market Adaptation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Right side: Stats --> */}
            {/* <div className="grid grid-cols-2 gap-6 animate__animated animate__fadeInRight">
                <div className="bg-neutral-800 p-8 rounded-xl text-center">
                    <div className="text-4xl font-bold text-white mb-2 counter" data-target="250">0</div>
                    <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-neutral-800 p-8 rounded-xl text-center">
                    <div className="text-4xl font-bold text-white mb-2 counter" data-target="98">0</div>
                    <p className="text-gray-400">Success Rate</p>
                </div>
                <div className="bg-neutral-800 p-8 rounded-xl text-center">
                    <div className="text-4xl font-bold text-white mb-2 counter" data-target="50">0</div>
                    <p className="text-gray-400">Team Experts</p>
                </div>
                <div className="bg-neutral-800 p-8 rounded-xl text-center">
                    <div className="text-4xl font-bold text-white mb-2 counter" data-target="15">0</div>
                    <p className="text-gray-400">Years Experience</p>
                </div>
            </div> */}
        </div>
    </div>
</section>
)
}

export default CoreConcept