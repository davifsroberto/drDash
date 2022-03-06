import { ElementType } from 'react';

import {
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  linkName: string;
}

export function NavLink({ icon, linkName, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />

      <Text ml="4" fontWeight="medium">
        {linkName}
      </Text>
    </Link>
  );
}
