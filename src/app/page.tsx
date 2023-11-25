"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setTimeout(() => {
      setHover(!hover)
    }, 500)
    console.log('hi')
  }
  return (
    <>
      <section className="h-screen relative bg-black text-white uppercase text-8xl font-sans font-bold tracking-widest grid place-items-center">
          Cursor
      </section>
      <section className="h-screen relative bg-white">
          <span className="absolute mx-auto left-0 right-0 top-40 text-7xl  text-center uppercase font-sans font-bold tracking-widest text-black">scroll card</span>
          <span className="absolute m-auto left-0 right-0 top-0 bottom-0  h-64 w-[600px] p-8 rounded-lg font-medium text-white bg-red-400 shadow-md">
            Hi
          </span>
          <span className="absolute m-auto left-0 right-0 top-[120px] bottom-0  h-64 w-[650px] p-8 rounded-lg font-medium text-white bg-yellow-400 shadow-md">
            Hi
          </span>
          <span className="absolute m-auto left-0 right-0 top-[240px] bottom-0  h-64 w-[700px] p-8 rounded-lg font-medium text-white bg-green-500 shadow-md">
            Hi
          </span>
      </section>
      <section className="h-screen relative grid place-items-center pt-40 bg-black">
        <span className="absolute mx-auto left-0 right-0 top-40 text-7xl  text-center uppercase font-sans font-bold tracking-widest text-white ">Hover Img to vdo</span>
        <span>
          <Image className={`w-96 h-96 rounded-xl object-cover bg-white ${hover ? 'hidden' : ''}`} width={384} height={384} src="/image/tokyo.jpeg" alt="tokyo pic" onMouseOver={handleMouseOver}/>
          <video className={`cursor-none z-50 ease-in-out duration-700  object-cover w-[384px] h-[384px] rounded-lg hover:scale-110 ${hover ? '' : 'hidden'}`}  autoPlay muted loop  onMouseOut={handleMouseOver}>
            <source src="/video/tokyo.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className={`mt-5 font-light text-xl ${hover ? 'underline-offset-4 underline' : ''}`}>Tokyo</div>
        </span>
      </section>
    </>
  )
}
