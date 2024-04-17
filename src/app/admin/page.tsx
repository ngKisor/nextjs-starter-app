

import { NextPage } from "next";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Profile: NextPage = async () => {

    return (
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
                Admin Dashboard
            </h1>
        </div>
    );
}

export default Profile;
