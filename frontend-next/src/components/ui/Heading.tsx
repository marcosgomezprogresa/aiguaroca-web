import React from "react";

interface HeadingProps {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  icon,
  iconPosition = "left",
  className = "",
  level = 1,
}) => {
  const safeLevel = Math.min(Math.max(level, 1), 6) as 1 | 2 | 3 | 4 | 5 | 6;
  const Tag = `h${safeLevel}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <div className="flex items-center gap-2">
      {iconPosition === "left" && icon && icon}

      <Tag className={`leading-tight ${className}`}>
        {text}
      </Tag>

      {iconPosition === "right" && icon && icon}
    </div>

  );
};

export default Heading;
