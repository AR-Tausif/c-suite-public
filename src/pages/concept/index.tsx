import Container from "@/components/Container";
import { ConceptCard } from "./conceptCard";

const Concept = () => {
  const conceptData = [
    {
      title: "Is it accessible?",
      description: "Yes. It adheres to the WAI-ARIA design pattern.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Is it styled?",
      description:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Is it styled?",
      description:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Is it styled?",
      description:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Is it styled?",
      description:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Is it styled?",
      description:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Is it styled?",
      description:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Is it animated?",
      description:
        "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
      image:
        "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <> 
      <div className="concept-title py-10 bg-gray-200 text-gray-300 text-center">
        <h4 className="text-4xl text-black font-bold">Concept</h4>
        <p className="mt-5 max-w-xl mx-auto text-gray-600">Modern and minimalist templates for building your next product. Built with React, NextJS, TailwindCSS, Framer Motion and Typescript</p>
      </div>
    <Container className="mb-10">
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5">
        {/*   Product card 1 - Starts Here 👇 */}
        {conceptData.map((item, index) => (
          <ConceptCard key={index} conceptData={item} />
        ))}
      </section>
    </Container>
    
    
    
    </>
  );
};
export default Concept;
