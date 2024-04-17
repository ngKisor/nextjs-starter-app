import '../styles/globals.css'
import React, { PropsWithChildren } from "react";
import { PageLayout } from "@/components/page-layout";
import { siteMetadata } from "@/components/page-head";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = siteMetadata;

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <PageLayout>{children}</PageLayout>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
