"use client";

import React, { ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa";

interface BreadCrumbsProps {
  startIcon?: ReactNode;
  pages: string[];
  className?: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ startIcon, pages, className }) => {
  return (
    <div className={`${className} align-center gap-2 lg:gap-5`}>
      {startIcon && startIcon}
      {pages && pages.map((page, idx) => (
        <div key={idx} className="align-center gap-2 lg:gap-5">
          <p>{page}</p>
          {idx !== pages.length - 1 && <FaChevronRight />}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
