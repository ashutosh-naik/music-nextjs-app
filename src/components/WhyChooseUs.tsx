"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover your sound with us: A personal journey in music mastery",
    description:
      "Embark on a personalized musical adventure, refining your unique sound through tailored guidance and immersive learning experiences, fostering true mastery in your chosen instrument or genre.",
  },
  {
    title: "Live feedback & Engagement",
    description:
      "Receive real-time feedback from experienced instructors, ensuring an interactive and engaging learning process that enhances your skills through immediate corrections and constructive critique.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Access a curriculum designed with the latest advancements in music education, blending traditional techniques with modern technology to provide a comprehensive and progressive learning experience.",
  },
  {
    title: "Limitless learning opportunities",
    description:
      "Explore an expansive range of learning resources and opportunities, enabling you to grow continuously and reach new heights in your musical journey without boundaries.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
