import React from 'react';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from './Heading.styled';
import { HeadingProps } from './Heading.types';

const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) => {
  switch (level) {
    case 1:
      return <Heading1 {...props}>{children}</Heading1>;
    case 2:
      return <Heading2 {...props}>{children}</Heading2>;
    case 3:
      return <Heading3 {...props}>{children}</Heading3>;
    case 4:
      return <Heading4 {...props}>{children}</Heading4>;
    case 5:
      return <Heading5 {...props}>{children}</Heading5>;
    case 6:
      return <Heading6 {...props}>{children}</Heading6>;
    default:
      return <Heading1 {...props}>{children}</Heading1>;
  }
};

export default Heading;