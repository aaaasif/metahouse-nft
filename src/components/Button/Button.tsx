import React, { ButtonHTMLAttributes } from "react";

import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...rest }) => {
  return (
    <button className={variant === "primary" ? "primary_btn" : "secondary_btn"} {...rest}>
      {children}
    </button>
  );
};

export default Button;
