// ** Global Styles Imports
import "../styles/globals.css";

// ** Next Imports
import { Inter } from "next/font/google";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

// ** Lib Imports
import { MuiSetup } from "@/providers/MuiSetup";
import QueryProvider from "@/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J9.COM--the first cryptocurrency casino based on Web3.0",
  description: "j9.io",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage:
            "url('https://j9.io/assets/PC-Background-d2a73e39.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "180dvh",
        }}
      >
        <QueryProvider>
          <MuiSetup>{children}</MuiSetup>
        </QueryProvider>
      </body>
    </html>
  );
}
