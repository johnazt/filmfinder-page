import React from "react";
import "../styles/globals.css";
import Navbar from "./shared/Navbar";
import { GlobalContextProvider } from "./context/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
