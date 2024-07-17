"use client"

import {
    Carousel,
    CarouselContent
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import CarouselIcon from "./carouselIcon"


export function CarouselLoop() {
    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true})
      )
  return (
    <div className="bg-[#A1824A] w-full h-[150px] flex justify-center items-center mt-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-[90%]" 
      >
        <CarouselContent className="">
          <CarouselIcon urlImage='/carousel/angular.svg' linkProvider="https://institucional.amil.com.br/"/>
          <CarouselIcon urlImage='/carousel/docker.svg' linkProvider="https://portal.sulamericaseguros.com.br/home.htm"/>
          <CarouselIcon urlImage="/carousel/python.svg" linkProvider="https://www.hapvida.com.br/site/"/>
          <CarouselIcon urlImage="/carousel/fastify.svg" linkProvider="https://www.mapfre.com.br/para-voce/"/>
          <CarouselIcon urlImage="/carousel/firebase.svg" linkProvider="https://banco.bradesco/html/classic/index.shtm"/>
          <CarouselIcon urlImage="/carousel/next.svg" linkProvider="https://www.allianz.com.br/"/>
          <CarouselIcon urlImage="/carousel/node.svg" linkProvider="https://www.odontoprev.com.br/"/>
          <CarouselIcon urlImage="/carousel/prisma.svg" linkProvider="https://www.portoseguro.com.br/"/>
          <CarouselIcon urlImage='/carousel/react.svg' linkProvider="https://institucional.amil.com.br/"/>
          <CarouselIcon urlImage='/carousel/sql.svg' linkProvider="https://portal.sulamericaseguros.com.br/home.htm"/>
          <CarouselIcon urlImage="/carousel/tailwind.svg" linkProvider="https://www.hapvida.com.br/site/"/>
          <CarouselIcon urlImage="/carousel/typescript.svg" linkProvider="https://www.mapfre.com.br/para-voce/"/>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
