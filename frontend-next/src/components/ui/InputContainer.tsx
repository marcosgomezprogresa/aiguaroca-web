"use client";

import React, { ReactNode } from "react";

interface InputContainerProps {
  label: string;
  icon?: ReactNode;
  placeholder: string;
  value: string;
  type?: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({
  label,
  icon,
  placeholder,
  value,
  type = "text",
  onchange,
  readOnly = false,
}) => {
  return (
    <div className="min-w-0 w-full space-y-2 text-base sm:text-lg">
      <p className="font-medium text-black">{label}</p>
      <div className="input-container align-center">
        {icon && icon}
        <input
          type={type}
          value={value}
          className="w-full outline-none placeholder:text-neutral-900"
          placeholder={placeholder}
          onChange={(e) => onchange(e)}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default InputContainer;
