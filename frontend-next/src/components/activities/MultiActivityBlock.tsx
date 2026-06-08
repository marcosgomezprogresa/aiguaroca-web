"use client";

import MultiActivity from "@/components/home/MultiActivity";

interface MultiActivityBlockProps {
  headingText?: string;
}

const MultiActivityBlock = ({ headingText }: MultiActivityBlockProps) => {
  return <MultiActivity headingText={headingText} />;
};

export default MultiActivityBlock;
