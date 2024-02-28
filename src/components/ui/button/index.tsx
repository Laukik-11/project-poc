import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  altDisabledStyle?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, altDisabledStyle = false, asChild = false, ...props }, ref) => {
    return (
      <button
        className={`min-w-[300px] sm:min-w-[350px] lg:min-w-[450px] flex items-center justify-center py-3 px-2 md:px-5 rounded-xl bg-rr-blue text-sm md:text-base text-white duration-100 ${
          altDisabledStyle
            ? "brightness-75"
            : "hover:bg-[#0086c3] hover:scale-[1.02] active:scale-[0.98]"
        } ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
