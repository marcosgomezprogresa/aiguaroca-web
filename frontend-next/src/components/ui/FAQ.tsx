"use client";

import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

interface SingleFAQProps {
  ques: string;
  ans: string[];
  isOpen: boolean;
  onClick: () => void;
}

const SingleFAQ = ({ ques, ans, isOpen, onClick }: SingleFAQProps) => {
  return (
    <div>
      <div
        onClick={onClick}
        className="flex items-center justify-between p-5 border-b border-neutral-200 cursor-pointer"
      >
        <p>{ques}</p>
        <IoChevronDownOutline
          size={24}
          color="black"
          className={`transition-all ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <ul className="list-disc list-inside py-5 px-10 space-y-5 border-b border-neutral-200">
          {ans.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface FAQProps {
  data: Array<{ ques: string; ans: string[] }>;
}

const FAQ = ({ data }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl text-neutral-800 rounded-xl overflow-hidden border border-neutral-200 shadow-lg">
      {data.map((item, index) => (
        <SingleFAQ
          key={index}
          ques={item.ques}
          ans={item.ans}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
