import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  styleType: "primary" | "secondary";
}

const commonStyle =
  " relative font-title text-lg lg:text-2xl cursor-pointer rounded-xl font-bold uppercase hover:scale-110 transition-all duration-300 h-12 px-8";
const buttonPrimaryStyle =
  "text-white  bg-gradient-to-br from-pink-500 to-purple-500";
const buttonSecondaryStyle =
  "bg-black  bg-clip-padding before:bg-gradient-to-br before:from-pink-500 before:to-purple-500 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 border-[2px] border-transparent before:m-[-2px] before:rounded-xl  before:z-[-1] hover:bg-transparent group";
const buttonSecondaryTextStyle =
  "bg-gradient-to-br from-pink-500 to-purple-500 text-transparent bg-clip-text group-hover:text-white transition-all duration-300";

const Button = (props: Props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`${commonStyle} ${
          props.styleType === "primary" && buttonPrimaryStyle
        } 
          ${props.styleType === "secondary" && buttonSecondaryStyle}
          `}
      >
        <span
          className={`${
            props.styleType === "secondary" && buttonSecondaryTextStyle
          }`}
        >
          {props.text}
        </span>
      </button>
    </>
  );
};

export default Button;
