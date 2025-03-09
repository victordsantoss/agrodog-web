
'use client'

import DashboardLayoutComponent from '@/components/layout/dashboard';
import { AlertProvider } from '@/contexts/alert.context';
import { AuthProvider } from '@/contexts/auth.context';
import TanstackProvider from '@/providers/tanstack.provider';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AlertProvider>
      <AuthProvider>
        <TanstackProvider>
          <DashboardLayoutComponent>
            {children}
          </DashboardLayoutComponent>
        </TanstackProvider>
      </AuthProvider>
    </AlertProvider>
  )
}


