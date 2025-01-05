import { ComponentType } from "@/interface"

const Container =({children}:ComponentType)=> {
return(
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {children}
    </div>
)
}

export default Container;