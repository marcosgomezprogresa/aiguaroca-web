"use client";

import { ReactNode, useState } from "react";
import Button from "./Button";

interface ReadMoreBlockProps {
  initialCollapsed?: boolean;
  children?: ReactNode;
}

const ReadMoreBlock = ({ initialCollapsed = false, children }: ReadMoreBlockProps) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);

  return (
    <>
      {!collapsed && children}
      <Button
        onClick={() => setCollapsed((value) => !value)}
        className="bg-white shadow border border-neutral-100 text-brand-300 px-3 py-1.5"
      >
        {!collapsed ? "Leer menos" : "Leer mas"}
      </Button>
    </>
  );
};

export default ReadMoreBlock;
