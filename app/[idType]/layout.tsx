import Navbar from "@/components/navbar/navbar";
import ThemeClient from "@/components/themeprovider";
import { Toaster } from "sonner";
export default function IdTypeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <ThemeClient>
      <Toaster theme="dark" position="bottom-center" />
      <Navbar />
      {children}
      </ThemeClient>
    </>
  );
}
