"use client";

import React from "react";

interface CardProps {
  title: string;
  description: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h1 className="lg:text-2xl text-lg font-semibold">{title}</h1>
      <p className="lg:text-xl text-sm text-neutral-900 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
