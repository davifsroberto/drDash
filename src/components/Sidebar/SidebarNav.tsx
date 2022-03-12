import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink
          href="/dashboard"
          icon={RiDashboardLine}
          linkName="Dashboard"
        />
        <NavLink href="/users" icon={RiContactsLine} linkName="Users" />
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink href="/forms" icon={RiInputMethodLine} linkName="Forms" />

        <NavLink
          href="/automation"
          icon={RiGitMergeLine}
          linkName="Automation"
        />
      </NavSection>
    </Stack>
  );
}
