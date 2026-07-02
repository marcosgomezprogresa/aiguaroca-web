import Link from "next/link";
import Image from "next/image";
import React from "react";

interface GridImageProps {
  name: string;
  image: string;
  className?: string;
  link: string;
}

const GridImage: React.FC<GridImageProps> = ({
  name,
  image,
  className = "",
  link,
}) => {
  return (
    <Link
      href={link}
      className={`group relative block w-full overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(15,23,42,0.16)] ring-1 ring-black/10 transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(15,23,42,0.22)] ${className}`}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        quality={90}
        unoptimized={image.startsWith("/api/v1/assets/")}
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center text-white lg:p-6">
        <div className="max-w-[90%]">
          <h3
            className="text-base font-bold italic uppercase leading-tight sm:text-lg lg:text-xl xl:text-2xl"
            style={{
              WebkitTextStroke: "1px rgba(0, 0, 0, 0.9)",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
            }}
          >
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default GridImage;
