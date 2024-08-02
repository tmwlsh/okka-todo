import React, { ReactNode } from "react";

type Width = 'small' | 'medium' | 'large';

interface ContainerProps {
  width: Width;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ width, children }) => {
  let widthClass: string;

  switch(width) {
    case 'small':
      widthClass = 'max-w-3xl';
      break;
    case 'medium':
      widthClass = 'max-w-5xl';
      break;
    default:
      widthClass = 'max-w-screen-2xl';
      break;
  }

  return (
    <div className={`mx-auto px-4 block ${widthClass}`}>
      {children}
    </div>
  );
}

export default Container;