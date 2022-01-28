import React, { ButtonHTMLAttributes } from "react";

import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "error";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...rest }) => {
  const getClassName = (v: any) => {
    switch (v) {
      case "secondary":
        return "secondary_btn";
      case "error":
        return "error_btn";
      default:
        return "primary_btn";
    }
  };

  return (
    <button className={getClassName(variant)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
