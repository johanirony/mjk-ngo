"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import image1 from '@/assets/hero.jpg'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import Image from "next/image";

export default function TeamCarousel() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      title: "Founder & CEO",
      image: image1,
    },
    {
      name: "Bob Smith",
      title: "CTO",
      image: image1,
    },
    {
      name: "Bob Smith",
      title: "CTO",
      image: image1,
    },
    {
      name: "Bob Smith",
      title: "CTO",
      image: image1,
    },
    
    // Add more team members...
  ];
  

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] px-10 bg-[#e7f3ff] "
    >
      <CarouselContent>
        {teamMembers.map((team, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-white ">
              <CardHeader className="aspect-auto">
            <Image src={team.image} alt="" />
            <CardTitle>{team.name}</CardTitle>
            <CardContent className="text-center">{team.title}</CardContent>
          </CardHeader>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}