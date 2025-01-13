
'use client'

import DashboardLayoutComponent from '@/components/layout/dashboard';
import { AlertProvider } from '@/contexts/alertContext';
import { AuthProvider } from '@/contexts/authContext';
import TanstackProvider from '@/providers/tanstackProvider';
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


