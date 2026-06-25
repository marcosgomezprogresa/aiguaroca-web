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
      className={`block w-full rounded-lg rounded-lg relative overflow-hidden group ${className}`}
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black/35 via-black/8 to-transparent transition-opacity duration-500 group-hover:from-black/45" />

      <div className="absolute inset-0 flex items-end text-white p-3 lg:p-6 relative z-10">
        <div className="align-center gap-2">
          <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold italic uppercase leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default GridImage;
