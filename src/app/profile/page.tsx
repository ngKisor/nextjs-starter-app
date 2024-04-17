

import { NextPage } from "next";
import React from "react";
import { getUserProfileData } from "@/services/profile.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Profile: NextPage = withPageAuthRequired(
  async () => {
    const user = await getUserProfileData();

    return (
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
      </div>
    );
  },
  { returnTo: "/profile" },
)
export default Profile;
