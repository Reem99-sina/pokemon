import Navbar from "@/components/navbar/navbar";
import { theme } from "@/components/theme";
import ThemeClient from "@/components/themeprovider";
import { Toaster } from "sonner";
import { ThemeProvider } from "styled-components";
export default function IdTypeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster theme="dark" position="bottom-center" />

      <ThemeClient>
        <Navbar />
        {children}
      </ThemeClient>
    </>
  );
}
