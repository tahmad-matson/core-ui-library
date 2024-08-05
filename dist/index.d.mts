import React, { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { LinkProps as LinkProps$1 } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}

declare const Button: React.FC<ButtonProps>;

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, Omit<LinkProps$1, 'to'> {
    href: string;
    children: ReactNode;
}

declare const Link: React.FC<LinkProps>;

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}

declare const Heading: React.FC<HeadingProps>;

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
}

declare const Paragraph: React.FC<ParagraphProps>;

export { Button, type ButtonProps, Heading, type HeadingProps, Link, type LinkProps, Paragraph, type ParagraphProps };
