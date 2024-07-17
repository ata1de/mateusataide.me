import Image from 'next/image'
import Link from 'next/link'
import { CarouselItem } from './ui/carousel'

interface CarouselIconProps {
    linkProvider: string
    urlImage: string
}

const CarouselIcon = ({ linkProvider, urlImage}: CarouselIconProps) => {
  return (
    
        <CarouselItem className="basis-[200px] flex items-center justify-center">
            <Link href={linkProvider} target='_blank'>
                <Image src={urlImage} alt='icone dos provedores' width={40} height={40}/>
            </Link>
        </CarouselItem>
  )
}

export default CarouselIcon