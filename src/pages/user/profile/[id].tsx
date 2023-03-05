import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios from "axios";
import { API } from "@/api/Api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserProfile: NextPage = ({ userData }: any) => {
  // const [userObj, setUserObj] = useState<any>({});
  // const router = useRouter();
  // const userId = router.query.userId as string;
  // useEffect(() => {
  //   const userData = async () => {
  //     const res = await API.user.getUserData(userId || "");
  //     setUserObj(res);
  //   };
  //   userData();
  // }, [userId]);
  console.log(userData);

  return (
    <div>
      {userData.map((data: any) => (
        <div key={data.firstName}>{data.firstName}</div>
      ))}
    </div>
  );
};

export default UserProfile;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "63f75ac1582456297df776d3" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const res = await API.user.getUserData(id || "");
  // const data = await res.json();
  return {
    props: {
      userData: res,
    },
  };
};
