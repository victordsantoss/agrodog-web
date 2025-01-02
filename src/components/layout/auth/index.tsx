'use client'

import { Box } from '@mui/material';
import React from 'react';
import { layoutStyle } from './styles';

export default function AuthLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      component="div"
      sx={layoutStyle.container}
    >
      <main
        style={layoutStyle.main}
      >
        {children}
      </main>
    </Box>
  );
}
