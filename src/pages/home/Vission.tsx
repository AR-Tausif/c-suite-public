import Container from "@/components/Container"
import { ImageCard } from "./ImageCard"
import { SectionHeading } from "./SectionHeading"

export const Vission = ()=>{
    return(
        <div className="py-20 w-full bg-white">
          <Container>
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-4 w-full text-sm max-md:mt-10 max-md:max-w-full">
              <SectionHeading primary="Our" secondary="Vission" />
              <div className="mt-8 text-zinc-600 max-md:max-w-full">
                Being a hassie free logo design service provider is our
                consistent goal always. Every client is an opportunity for us to
                create another milestone beyond the previous milestone achieved
                by us.
              </div>
              <div className="mt-8 mr-8 text-zinc-600 max-md:mr-2.5">
                So Symbolsense and the team are well concerned each moment to be
                reason of satisfied clients smile
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7d99abf1dfeeaae61d7b82a4fd596f9188f49b394fe692f3c4a4d8d176a22b?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9"
              alt="Vision illustration"
              className="grow aspect-[1.78] max-md:mt-10 max-md:max-w-"
            />
          </div>
        </div>
        </Container>
      </div>
    )
}