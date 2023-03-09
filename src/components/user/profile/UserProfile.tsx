import { FC } from "react";

import { Typography, Box } from "@mui/material";

interface UserProfileType {
  user: { firstName: string; lastName: string; email: string };
}

const UserProfile: FC<UserProfileType> = ({ user }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1">
        {user.firstName} {user.lastName}
      </Typography>
      <Typography variant="subtitle1">email: {user.email}</Typography>
    </Box>
  );
};

export default UserProfile;
