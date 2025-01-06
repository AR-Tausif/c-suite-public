import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ComponentType } from "@/interface"

interface Props extends ComponentType {
    title:string
    content:string
    index: number
}

const Item = ({content, title, index}:Props)=>{
return(
    <AccordionItem value={`item-${index}`} className="bg-gray-100 px-9 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200">
          <AccordionTrigger className="font-bold text-lg">{title}</AccordionTrigger>
          <AccordionContent>
            {content}
          </AccordionContent>
        </AccordionItem>
)
}

export default Item