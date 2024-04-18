import mixpanelService from '@/services/mixpanel.service';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

const Profile: NextPage = async () => {
  useEffect(() => {
    mixpanelService.track('Navigation', {
      Page: 'Admin Dashboard',
    });
  }, []);
  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Admin Dashboard
      </h1>
    </div>
  );
};

export default Profile;
