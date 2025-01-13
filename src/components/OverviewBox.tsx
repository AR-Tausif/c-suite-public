interface TProps {
    title: string,
    description: string,
    icon: JSX.Element
}
const OverviewBox = ({title, description, icon}:TProps) =>{
    return(
        <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
    )
}
export default OverviewBox;