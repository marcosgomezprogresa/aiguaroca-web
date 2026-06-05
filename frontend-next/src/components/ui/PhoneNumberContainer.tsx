"use client";

import React from "react";

interface PhoneNumberContainerProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
  readOnly?: boolean;
}

const PhoneNumberContainer: React.FC<PhoneNumberContainerProps> = ({
  label,
  onChange,
  value,
  readOnly = false,
}) => {
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.replace(/\D/g, "");
    onChange(input);
  };

  const formatPhoneNumber = (input: string) => {
    if (!input) return "";
    const cleaned = input.replace(/\D/g, "").slice(0, 9);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join("-");
    }
    return input;
  };

  return (
    <div className="relative min-w-0 w-full space-y-2 text-base sm:text-lg">
      <p className="font-medium text-black">{label}</p>
      <div className="align-center input-container">
        <div className="align-center gap-2 cursor-pointer">
          <span>{"🇪🇸"}</span>
          <span>{"+34"}</span>
        </div>
        <input
          type="text"
          className="border-none outline-none placeholder:text-neutral-900 flex-1"
          value={formatPhoneNumber(value)}
          onChange={handlePhoneChange}
          placeholder="XXX-XXX-XXX"
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default PhoneNumberContainer;
