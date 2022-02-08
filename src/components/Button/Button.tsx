import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children }) => {
  const getClassname = () => {
    switch (variant) {
      case "secondary":
        return "secondary_btn";
      default:
        return "primary_btn";
    }
  };

  return <button className={getClassname()}>{children}</button>;
};

export default Button;
