import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      className="px-md py-sm bg-app-sub-bg dark:bg-app-dark-sub-bg rounded-md text-app-sub-text dark:text-app-dark-sub-text text-sm"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
