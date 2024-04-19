'use client';

import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { getUserProfileData } from '@/services/user.service';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import mixpanelService from '@/services/mixpanel.service';

const Profile: NextPage = withPageAuthRequired(
  async () => {
    useEffect(() => {
      mixpanelService.track('Navigation', {
        Page: 'Profile',
      });
    }, []);
    const user = await getUserProfileData();

    return (
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
      </div>
    );
  },
  { returnTo: '/profile' },
);
export default Profile;
