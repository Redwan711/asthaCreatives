import React from "react";

const variants = {
  primary:
    "bg-brandnd text-white hover:bg-brandnd/90 shadow-md shadow-brandnd/20 hover:shadow-lg hover:shadow-brandnd/30",
  dark: "bg-brand text-white hover:bg-brandnd shadow-md hover:shadow-lg",
  outline:
    "border border-white/30 text-white bg-white/5 hover:bg-white hover:text-brand backdrop-blur-sm",
  "outline-dark":
    "border border-gray-300 text-gray-800 bg-white hover:border-brand hover:text-brand hover:bg-gray-50",
  white: "bg-white text-brand hover:bg-gray-100 shadow-md hover:shadow-lg",
  ghost: "text-gray-700 hover:text-brandnd hover:bg-gray-100",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-3.5 text-base md:text-lg",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) => {
  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
