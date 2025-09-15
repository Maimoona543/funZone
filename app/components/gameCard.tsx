'use client'
import Link from "next/link";
import { useEffect, useRef } from "react";
interface Props {
  title: string;
  description: string;
  id: string;
}


const GameCard = ({ title, description, id }: Props) => {

  const videoRef  = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
  if (videoRef.current) {
    videoRef.current.playbackRate= 2.0;
  }
  })


  return (
<div className="flex items-center flex-col sm:flex-row md:justify-between justify-center h-[70vh]  bg-custom bg-opacity-20 border border-gray-800 rounded-xl overflow-hidden">
      {/* Video Section */}
      <div className="flex items-center md:w-[50%] w-[90%] pl-3">
        <video
        ref={videoRef}
          src={`/${title}.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-auto rounded-xl shadow-lg object-cover m-0"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center  items-center  text-center sm:w-[53%] w-full px-4  text-white">
        <h2 className="text-3xl lg:text-6xl sm:pb-[6%] m-0 font-bold pt-3 underline decoration-2">{title}</h2>
        <div className="w-full  text-center">
   <p className="mt-2 w-full text-center text-gray-400 lg:text-xl sm:text-md text-sm  ">
  {description}
</p>
        </div>
          
     <div key={id} id={title}>
              <Link href={`/${title}`}>
          <button className="cursor-pointer py-2 px-6 bg-custom  border hover:opacity-60 border-[#080575] bg-opacity-20 mt-[20%] sm:mt-[30%] text-white rounded-xl" >Play Now</button>
              </Link>

        </div>
      </div>
    </div>
  );
};

export default GameCard;
