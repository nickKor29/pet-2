"use client";
import { useState } from "react";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "@/app/_styles/gallery.css";

export default function Gallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="grid grid-rows-[2fr_1fr] gap-y-10 md:grid-cols-2">
      <div className="relative col-span-2 h-96 row-span-1 rounded-lg overflow-hidden">
        <TransitionGroup>
          <CSSTransition key={currentImage} timeout={300} classNames="fade">
            <Image
              src={images[currentImage]}
              alt="Main Tour"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="grid grid-cols-3 gap-4 col-span-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-40 md:h-48 cursor-pointer rounded-lg overflow-hidden border-2 transition-transform duration-300 ${
              currentImage === index
                ? "border-blue-500 scale-105"
                : "border-transparent"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
