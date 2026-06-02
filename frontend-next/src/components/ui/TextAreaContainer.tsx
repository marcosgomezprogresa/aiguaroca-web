"use client";

import React, { ReactNode } from "react";

interface TextAreaContainerProps {
  label: string;
  icon?: ReactNode;
  placeholder: string;
  rows?: number;
  readOnly?: boolean;
  onchange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextAreaContainer: React.FC<TextAreaContainerProps> = ({
  label,
  icon,
  placeholder,
  rows = 3,
  readOnly = false,
  onchange,
  value,
}) => {
  return (
    <div className="space-y-2 w-full text-lg">
      <p className="font-medium text-black">{label}</p>
      <div className="input-container flex items-start">
        {icon && icon}
        <textarea
          rows={rows}
          className="w-full resize-none outline-none placeholder:text-neutral-900"
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onchange}
          value={value}
        />
      </div>
    </div>
  );
};

export default TextAreaContainer;
