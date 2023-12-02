import { useState } from "react";
import Image from "next/image";

function CardImgVdo() {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setTimeout(() => {
      setHover(!hover);
    }, 500);
  };
  return (
    <>
      <Image
        className={`w-96 h-96 rounded-xl object-cover bg-white ${
          hover ? "hidden" : ""
        }`}
        width={384}
        height={384}
        src="/image/tokyo.jpeg"
        alt="tokyo pic"
        onMouseOver={handleMouseOver}
      />
      <video
        className={`cursor-none ease-in-out duration-300  object-cover w-[384px] h-[384px] rounded-lg hover:scale-110 ${
          hover ? "" : "hidden"
        }`}
        autoPlay
        muted
        loop
        onMouseOut={handleMouseOver}
      >
        <source src="/video/tokyo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`mt-5 font-light text-xl text-white ${
          hover ? "underline-offset-4 underline" : ""
        }`}
      >
        Tokyo
      </div>
    </>
  );
}

export default CardImgVdo;
