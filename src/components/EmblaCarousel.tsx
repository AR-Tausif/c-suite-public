import  { FC } from 'react'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import ExpertCard from './ExpertCard'
interface IProps {
  slides: number[],
  options: Record<string, unknown>
}
const EmblaCarousel:FC<IProps> = (props) => {
  const { slides, options } = props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

 
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container p-10">
          {slides.map((index) => (
            <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_25%] group transform transition-all duration-300 hover:scale-105" key={index}>
              <div className="embla__slide__number">
                <ExpertCard/>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* 
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot bg-gray-300 '.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default EmblaCarousel
