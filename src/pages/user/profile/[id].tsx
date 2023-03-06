import { NextPage } from "next";
import { API } from "@/api/Api";
import React, { useEffect, useState } from "react";
import { Typography, Box } from '@mui/material';

const UserProfile: NextPage = ({ userId }: any) => {
  const [userObj, setUserObj] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const res = await API.user.getUserData(userId || "");
      setUserObj(res);
    };
    getData();
  }, [userId]);

  return (
    <Box sx={{p: 2}}>
      <Typography variant="subtitle1">{userObj.firstName} {userObj.lastName}</Typography>
      <Typography variant="subtitle1">email: {userObj.email}</Typography>
    </Box>
  );
};

UserProfile.getInitialProps = (context) => {
  API.setContext(context)
  const id = context.query.id as string;
  return {
    userId: id,
  };
};

export default UserProfile;
