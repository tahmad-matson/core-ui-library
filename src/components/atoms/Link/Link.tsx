import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { StyledLink } from '@components/atoms/Link/Link.styled';
import { LinkProps } from '@components/atoms/Link/Link.types';

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <StyledLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </StyledLink>
    );
  }

  const { to, ...restProps } = props as RouterLinkProps;

  return (
    <RouterLink to={href} {...restProps}>
      {children}
    </RouterLink>
  );
};

export default Link;