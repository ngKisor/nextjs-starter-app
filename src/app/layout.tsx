import '../styles/globals.css';
import React, { PropsWithChildren, useEffect } from 'react';
import { PageLayout } from '@/components/page-layout';
import { siteMetadata } from '@/components/page-head';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useUser } from '@auth0/nextjs-auth0/client';
import mixpanelService from '@/services/mixpanel.service';

export const metadata = siteMetadata;

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      mixpanelService.initializeMixpanel();
      mixpanelService.identify(user.sub);
    }
  }, [user]);

  return (
    <html lang="en">
      <head></head>
      <body>
        <UserProvider>
          <PageLayout>{children}</PageLayout>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
