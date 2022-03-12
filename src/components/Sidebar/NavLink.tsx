import { ElementType } from 'react';

import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  linkName: string;
  href: string;
}

export function NavLink({ icon, linkName, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" {...rest}>
        <Icon as={icon} fontSize="20" />

        <Text ml="4" fontWeight="medium">
          {linkName}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
