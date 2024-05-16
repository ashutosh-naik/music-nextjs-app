"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Attending music school taught me discipline and the importance of practice. It was a transformative experience that helped me understand the depth of musical expression.",
    name: "Emily Sanchez",
    title: "Piano Student",
  },
  {
    quote:
      "The rigorous training at music school pushed my technical skills to new heights, but more importantly, it instilled in me a profound appreciation for the subtleties of classical music.",
    name: "Michael Chang",
    title: "Violin Student",
  },
  {
    quote:
      "Music school was a journey of self-discovery. I learned to use my voice not just as an instrument, but as a medium to convey emotion and tell stories.",
    name: "Sarah Thompson",
    title: "Vocal Performance Student",
  },
  {
    quote:
      "The collaborative environment at music school was invaluable. Working with other talented musicians broadened my musical horizons and improved my versatility.",
    name: "David Lopez",
    title: "Guitar Student",
  },
  {
    quote:
      "In music school, I gained hands-on experience with the latest production technology. It was crucial for honing my skills and preparing for a career in the music industry.",
    name: "Jessica Martin",
    title: "Music Production Student",
  },
  {
    quote:
      "Music school taught me the importance of improvisation and creativity. It was a space where I could experiment and find my unique voice in jazz.",
    name: "Robert Davis",
    title: "Jazz Studies Student",
  },
  {
    quote:
      "The vocal training I received at music school was intense and challenging, but it built the foundation for a successful career in opera.",
    name: "Olivia Green",
    title: "Opera Student",
  },
  {
    quote:
      "The comprehensive curriculum at music school covered everything from technique to music theory, giving me a well-rounded education that prepared me for professional performances.",
    name: "Anthony White",
    title: "Percussion Student",
  },
  {
    quote:
      "Studying music theory in depth allowed me to appreciate the complexity and beauty of compositions. It has greatly enhanced my performance and teaching capabilities.",
    name: "Lauren Kim",
    title: "Music Theory Student",
  },
  {
    quote:
      "Music school was where I developed my technical skills and learned the importance of networking. The connections I made there have been vital to my career.",
    name: "Benjamin Clark",
    title: "Saxophone Student",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
