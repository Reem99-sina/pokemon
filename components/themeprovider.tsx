"use client"

import * as React from "react"
import { ThemeProvider  } from "styled-components"


import { theme } from "@/components/theme";


export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
} 
