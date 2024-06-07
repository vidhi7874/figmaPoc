// Providers.ts

'use client';

import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider defaultTheme="dark" attribute="class" disableTransitionOnChange>
    {children}
  </ThemeProvider>
);

export default Providers;
