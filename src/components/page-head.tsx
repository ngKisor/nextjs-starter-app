import React from 'react';
import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Next js starter app',
  description:
    'start buidling next with shadcn, tailwind and app router with Auth 0.',
  icons: [
    {
      rel: 'shortcut icon mask-icon',
      color: '#000000',
      url: 'https://cdn.auth0.com/website/auth0_favicon.svg',
    },
  ],
};
