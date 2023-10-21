import React, { type ReactNode } from "react";
import { Slide } from "~/components";

interface ChildrenWithProps {
  children: ReactNode;
}

export default function AlternateSlide({ children }: ChildrenWithProps) {
  const alternatingChildren = React.Children.map(children, (child, index) => {
    const left = index % 2 === 1;
    return <Slide left={left}>{child}</Slide>;
  });

  return <>{alternatingChildren}</>;
}
