import { NextPage } from "next";
import { API } from "@/api/Api";
import React, { useEffect, useState } from "react";
import UserProfile from "@/components/user/profile/UserProfile";

const UserProfilePage: NextPage = ({ userId }: any) => {
  const [userObj, setUserObj] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const res = await API.user.getUserData(userId || "");
      setUserObj(res);
    };
    getData();
  }, [userId]);

  return (
    <>
      <UserProfile user={userObj} />
    </>
  );
};

UserProfilePage.getInitialProps = (context) => {
  API.setContext(context);
  const id = context.query.id as string;
  return {
    userId: id,
  };
};

export default UserProfilePage;
