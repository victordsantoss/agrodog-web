'use client'

import { Box } from "@mui/material";
import Image from "next/image";
import { containerStyle } from "./styles";

export default function PageLoadingComponent() {
  return (
    <Box
      sx={containerStyle}
    >
      <Image
        width={300}
        height={250}
        src={'/assets/gifs/pet-unscreen.gif'}
        alt={'Cachorro fofinho pulando'}
      />
    </Box>
  );
}