import { ComponentType } from "@/interface"

const Container =({children, className}:ComponentType)=> {
return(
    <div className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
)
}

export default Container;