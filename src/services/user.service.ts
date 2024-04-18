import 'server-only';

import { UserProfile } from '@/types/user-profile';
//Get Server-Side User Profile Information in Next.js
import { Claims, getSession } from '@auth0/nextjs-auth0';

export const getUserProfileData = async (): Promise<Claims> => {
  const session = await getSession();

  if (!session) {
    throw new Error(`Requires authentication`);
  }

  const { user } = session;

  return user;
};
