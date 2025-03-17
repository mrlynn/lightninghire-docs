import React from 'react';
import { ComponentTypes } from './ComponentTypes';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';

export default function NavbarItem(props) {
  const ComponentType = ComponentTypes[props.type] || DefaultNavbarItem;
  return <ComponentType {...props} />;
} 