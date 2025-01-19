import Container from "@/components/Container";
import SectionHeading from "../components/SectionHeading";
import InfiniteHorizontalScroll from "@/components/infiniteScroll";
import ExpertCard from "@/components/ExpertCard";

const ExpertTeam = () => {
  return (
    <Container>
      <section id="experts" className="pt-20 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Expert Team"
            className="mb-0"
          />

          <InfiniteHorizontalScroll intervalTime={5} scrollSpeed={0.9}>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
          </InfiniteHorizontalScroll>
        </div>
      </section>
    </Container>
  );
};

export default ExpertTeam;
