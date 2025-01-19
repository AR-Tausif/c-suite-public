import Container from "@/components/Container";
import EmblaCarousel from "../components/EmblaCarousel";
import SectionHeading from "../components/SectionHeading";
import InfiniteHorizontalScroll from "@/components/infiniteScroll";

const ExpertTeam = () => {
  return (
    <Container>
      <section id="experts" className="pt-20 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Expert Team"
            className="mb-0"
          />

          <InfiniteHorizontalScroll intervalTime={5} scrollSpeed={2}>
            <img src="https://placehold.co/600x400" alt="Brand 1" />
            <img src="https://placehold.co/600x400" alt="Brand 2" />
            <img src="https://placehold.co/600x400" alt="Brand 3" />
            <img src="https://placehold.co/600x400" alt="Brand 4" />
            <img src="https://placehold.co/600x400" alt="Brand 5" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
            <img src="https://placehold.co/600x400" alt="Brand 6" />
          </InfiniteHorizontalScroll>
        </div>
      </section>
    </Container>
  );
};

export default ExpertTeam;
