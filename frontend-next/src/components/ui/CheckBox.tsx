"use client";

import React from "react";
import { IoMdCheckmark } from "react-icons/io";

interface CheckBoxProps {
  value?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ value = false }) => {
  return (
    <div className={`checkbox-container ${value ? "checked" : ""}`}>
      <IoMdCheckmark />
    </div>
  );
};

export default CheckBox;
