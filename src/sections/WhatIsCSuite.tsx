import Container from "@/components/Container";

const WhatIsCSuite = () => {
  return (
    <div className="border-b-[3px] border-cerulean-blue-800"> 
    <Container>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-0 py-6">
        <div className="relative inline-block text-center">
          {/* <!-- Red borders --> */}
          <div className="absolute top-0 left-0 h-1 sm:h-2 w-28 bg-red-600"></div>
          <div className="absolute top-0 left-0 h-14 sm:h-16 w-1 sm:w-2 bg-red-600"></div>

          <div className="absolute bottom-0 right-0 h-1 sm:h-2 w-28 bg-red-600"></div>
          <div className="absolute bottom-0 right-0 h-14 sm:h-16 w-1 sm:w-2 bg-red-600"></div>

          {/* <!-- Text --> */}
          <h2 className="text-2xl sm:text-4xl font-bold p-4 sm:p-5 px-8">
            WHAT IS C- SUITE?
          </h2>
        </div>
        <p className="w-full sm:w-2/4 text-center sm:text-left text-gray-600">
          A dynamic partner of engagement, placement, assessment, recruitment
          and development solutions, delivering unparalleled C-Level leadership
          expertise as strategic lifeline for, established, transforming or
          startup companies during transition, challenges and distinct projects.
        </p>
      </div>
    </Container>
    </div>
  );
};
export default WhatIsCSuite;
