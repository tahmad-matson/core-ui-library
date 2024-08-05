import React from 'react';
import { ParagraphBase } from './Paragraph.styled';
import { ParagraphProps } from './Paragraph.types';

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  return <ParagraphBase {...props}>{children}</ParagraphBase>;
};

export default Paragraph;