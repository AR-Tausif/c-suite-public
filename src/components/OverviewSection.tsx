

const Overview = ()=>{
return(
    <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">Company Overview</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Card 1 --> */}
                <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Execution</h3>
                    <p className="text-gray-600">We deliver rapid solutions with precision and efficiency, ensuring quick time-to-market for your business needs.</p>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                    <p className="text-gray-600">Our rigorous quality control processes ensure delivery of premium solutions that exceed expectations.</p>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Customization</h3>
                    <p className="text-gray-600">Tailored solutions designed specifically for your unique business challenges and goals.</p>
                </div>

            </div>

           
        </div>
    </section>
)
}

export default Overview;