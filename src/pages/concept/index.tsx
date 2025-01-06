import Container from "@/components/Container";
import {
  Accordion,
} from "@/components/ui/accordion";
import Item from "./accordionItem";

const Concept = () => {
  const conceptData = [
    {title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern."},
    {title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components&apos; aesthetic."},
    {title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components&apos; aesthetic."},
    {title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components&apos; aesthetic."},
    {title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components&apos; aesthetic."},
    {title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components&apos; aesthetic."},
    {title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components&apos; aesthetic."},
    {title:"Is it animated?", content: "Yes. It&apos;s animated by default, but you can disable it if you prefer."}
  ]
  return (
    <Container className="my-10">
      <Accordion type="single" collapsible className="w-full space-y-2">
        {conceptData.map((item, index) => <Item content={item.content} title={item.title} index={index} />)}
      </Accordion>
    </Container>
  );
};
export default Concept;
