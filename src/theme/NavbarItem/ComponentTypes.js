import CustomAuthNav from './CustomAuthNav';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';

export const ComponentTypes = {
  default: DefaultNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  dropdown: DropdownNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  'custom-auth-nav': CustomAuthNav,
}; 