'use client';

import React, { PropsWithChildren, useEffect } from 'react';
import Navbar from './navbar';
// import Loading from './loading';
import Footer from './footer';
import { useUser } from '@auth0/nextjs-auth0/client';
import mixpanelService from '@/services/mixpanel.service';

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      mixpanelService.initializeMixpanel();
      mixpanelService.identify(user.sub);
    }
  }, [user]);

  // const { isLoading } = useUser();

  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div className="page-layout">
      <Navbar />
      <div className="page-layout__content">{children}</div>
      <Footer />
    </div>
  );
};
