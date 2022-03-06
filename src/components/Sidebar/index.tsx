import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GENERAL">
          <NavLink icon={RiDashboardLine} linkName="Dashboard" />
        </NavSection>

        <NavSection title="AUTOMATION">
          <NavLink icon={RiInputMethodLine} linkName="Forms" />

          <NavLink icon={RiGitMergeLine} linkName="Automation" />
        </NavSection>
      </Stack>
    </Box>
  );
}
