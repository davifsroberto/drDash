import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
} & LinkProps;

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive: boolean = false;

  if ((shouldMatchExactHref && asPath === rest.href) || asPath === rest.as)
    isActive = true;

  if (
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as))) &&
    !shouldMatchExactHref
  )
    isActive = true;

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? 'pink.400' : 'gray.50' })}
    </Link>
  );
}
