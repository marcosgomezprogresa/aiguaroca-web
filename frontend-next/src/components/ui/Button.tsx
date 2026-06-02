import React from "react";
import { LuLoaderCircle } from "react-icons/lu";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  href,
  target,
  rel,
}) => {
  const classes = `button ${className} ${icon ? "center" : ""}`;

  if (href) {
    const isDisabled = disabled || loading;
    const computedRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel;

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (onClick) onClick(e);
    };

    // External link
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={target}
          rel={computedRel}
          onClick={handleAnchorClick}
          aria-disabled={isDisabled ? "true" : undefined}
          tabIndex={isDisabled ? -1 : undefined}
          className={classes}
        >
          {icon && iconPosition === "left" && icon}
          {loading ? <LuLoaderCircle size={20} className="spin" /> : children}
          {icon && iconPosition === "right" && icon}
        </a>
      );
    }

    // Internal link
    return (
      <Link
        href={href}
        target={target}
        rel={computedRel}
        onClick={handleAnchorClick}
        aria-disabled={isDisabled ? "true" : undefined}
        tabIndex={isDisabled ? -1 : undefined}
        className={classes}
      >
        {icon && iconPosition === "left" && icon}
        {loading ? <LuLoaderCircle size={20} className="spin" /> : children}
        {icon && iconPosition === "right" && icon}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {icon && iconPosition === "left" && icon}
      {loading ? <LuLoaderCircle size={20} className="spin" /> : children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
