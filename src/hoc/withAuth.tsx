'use client';

import { AuthStorage } from '@/storages/authStorage';
import { useRouter } from 'next/navigation';
import { FC, ComponentType, useEffect } from 'react';

export function withAuth<T extends Record<string, unknown>>(Component: ComponentType<T>): FC<T> {
  const checkActiveSession = async (token: string | null): Promise<boolean> => {
    if (!token) return false;
    // Adicione a lógica para validar o token aqui, por exemplo:
    // const response = await fetch('/api/validate-session', { headers: { Authorization: `Bearer ${token}` } });
    // return response.ok;
    return true; // Placeholder, ajuste conforme necessário
  };

  return function WithAuth(props: T) {
    const router = useRouter();

    useEffect(() => {
      const validateSession = async () => {
        const token = AuthStorage.getToken();
        if (!token) {
          router.push('/login');
          return;
        }

        const isValidSession = await checkActiveSession(token);
        if (!isValidSession) {
          router.push('/login');
        }
      };

      validateSession();
    }, [router]);

    return <Component {...props} />;
  };
}
