"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

interface SingleFAQProps {
  ques: string;
  ans: string[];
  isOpen: boolean;
  onClick: () => void;
}

const SingleFAQ = ({ ques, ans, isOpen, onClick }: SingleFAQProps) => {
  return (
    <div className={styles.item}>
      <button
        type="button"
        onClick={onClick}
        className={styles.trigger}
        aria-expanded={isOpen}
      >
        <span>{ques}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className={styles.panel}>
          <ul className={styles.list}>
            {ans.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface FAQProps {
  data: Array<{ ques: string; ans: string[] }>;
}

const FAQ = ({ data }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faq}>
      {data.map((item, index) => (
        <SingleFAQ
          key={index}
          ques={item.ques}
          ans={item.ans}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
