import { AnchorHTMLAttributes, ReactNode } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, Omit<RouterLinkProps, 'to'> {
  href: string;
  children: ReactNode;
}