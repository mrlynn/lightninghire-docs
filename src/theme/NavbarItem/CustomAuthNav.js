import React from 'react';
import AuthNav from '@site/src/components/AuthNav';
import { AuthProvider } from '@site/src/components/AuthProvider';

export default function CustomAuthNav() {
  return (
    <AuthProvider>
      <AuthNav />
    </AuthProvider>
  );
} 