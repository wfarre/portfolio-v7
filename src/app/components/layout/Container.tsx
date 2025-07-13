import React from "react";

interface Props {
  ref?: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

const Container = (props: Props) => {
  return (
    <div ref={props.ref} className="py-40 relative bg-inherit">
      {props.children}
    </div>
  );
};

export default Container;
