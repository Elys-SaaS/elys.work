"use client";
import { cn } from "@/app/utils";
import { FC, useRef, useState } from "react";

interface IButtonPrimaryProps {
  onClick: () => void;
  textContent: string;
  className?: string;
}

const ButtonPrimary: FC<IButtonPrimaryProps> = ({
  onClick,
  textContent,
  className,
}) => {
  const divRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <button
        ref={divRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative z-10 inline-flex w-fit mx-auto h-12 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[#c0c6fc] bg-gradient-to-r dark:from-[#070e41] dark:to-[#141d57] from-[#9ba3fdfd] to-[#3d5af1] px-6 font-medium text-white  shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50",
          className
        )}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, #656fe288, #00000026)`,
          }}
        />
        <span className={cn("relative z-20")}>{textContent}</span>
      </button>
    </>
  );
};

export default ButtonPrimary;
