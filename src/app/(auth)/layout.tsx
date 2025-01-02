'use client'

import AuthLayoutComponent from '@/components/layout/auth';
import { AlertProvider } from '@/contexts/alertContext';
import { AuthProvider } from '@/contexts/authContext';
import TanstackProvider from '@/providers/tanstackProvider';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AlertProvider>
      <AuthProvider>
        <TanstackProvider>
          <AuthLayoutComponent>
            {children}
          </AuthLayoutComponent>
        </TanstackProvider>
      </AuthProvider>
    </AlertProvider>
  )
}
