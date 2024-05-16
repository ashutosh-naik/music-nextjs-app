"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Grasp the fundamentals of music theory to enhance your comprehension and execution of musical concepts.",
    link: "/",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Unlock your creativity by learning techniques and strategies for crafting memorable and impactful songs.",
    link: "/",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Elevate your skills with advanced techniques and disciplined practice tailored to mastering your musical instrument.",
    link: "/",
  },
  {
    title: "Music Production Essentials",
    description:
      "Explore the core elements of music production, from recording to mixing, to create polished, professional tracks.",
    link: "/",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Improve your stage presence and performance skills to captivate and engage live audiences effectively.",
    link: "/",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Discover strategies to promote your music online, grow your audience, and build your brand in the digital age.",
    link: "/",
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 mb-12 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        {/* <div className="mt-10"> */}
        <div className="mt-10 max-w-6xl mx-auto px-8">
          <HoverEffect items={featuredWebinars} />
        </div>
        {/* </div> */}
        <div className="mt-10 text-center">
          <Link
            href="/webinars"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
