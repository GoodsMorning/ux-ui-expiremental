"use client";

import Image from "next/image"
import '../style/scroll.css'
import { useEffect } from "react"
import CardImgVdo from "@/components/card-img-vdo"

export default function Home() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
          entry.target.classList.remove("fade-out")
        } else {
          entry.target.classList.add("fade-out")
          entry.target.classList.remove("fade-in")
        }
      })
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    }
  );

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".scroll-fade");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  });
  return (
    <>
      <section className="h-screen relative bg-black text-white uppercase text-8xl font-sans font-bold tracking-widest grid place-items-center">
        Cursor
      </section>
      <section className="h-screen relative bg-white">
        <span className="absolute mx-auto left-0 right-0 top-40 text-7xl  text-center uppercase font-sans font-bold tracking-widest text-black">
          scroll card
        </span>
        <span className="scroll-fade opacity-0 transition-opacity duration-300 ease-in absolute m-auto left-0 right-0 top-0 bottom-0  h-64 w-[600px] p-8 rounded-lg font-medium text-white bg-red-400 shadow-md">
          Hi
        </span>
        <span className="scroll-fade opacity-0 transition-opacity duration-500 ease-in absolute m-auto left-0 right-0 top-[120px] bottom-0  h-64 w-[650px] p-8 rounded-lg font-medium text-white bg-yellow-400 shadow-md">
          Hi
        </span>
        <span className="scroll-fade opacity-0 transition-opacity duration-700 ease-in absolute m-auto left-0 right-0 top-[240px] bottom-0  h-64 w-[700px] p-8 rounded-lg font-medium text-white bg-green-500 shadow-md">
          Hi
        </span>
      </section>
      <section className="h-screen relative grid place-items-center pt-40 bg-black">
        <span className="scroll-fade absolute mx-auto left-0 right-0 top-40 text-7xl  text-center uppercase font-sans font-bold tracking-widest text-white truncate">
          Hover Img to vdo
        </span>
        <span className="scroll-fade ">
          <CardImgVdo/>
        </span>
      </section>
    </>
  );
}