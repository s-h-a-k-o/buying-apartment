import { FC, useState } from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import MainRightSide from "./mainLeftSide/mainLeftSide";
import ProfileMenu from "./profileMenu/ProfileMenu";

const MainNavigation: FC = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ background: "#e8eaf6" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <MainRightSide />
          <Box sx={{ display: "flex" }}>
            <Link href="/">
              <IconButton
                size="large"
                edge="end"
                aria-label="logo"
                disableRipple
              >
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={70}
                  height={70}
                  priority
                  className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] "
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    ml: { xs: 0.5, sm: 2 },
                    fontSize: { xs: "16px", sm: "20px" },
                  }}
                >
                  Apartments
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <ProfileMenu />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" sx={{ color: "black", fontWeight: "bold" }}>
              Buy
            </Button>
            <Button color="inherit" sx={{ color: "black", fontWeight: "bold" }}>
              Sell
            </Button>
            <Button color="inherit" sx={{ color: "black", fontWeight: "bold" }}>
              Apartments
            </Button>
            <Button color="inherit" sx={{ color: "black", fontWeight: "bold" }}>
              Contact
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<LoginIcon />}
              sx={{
                color: "blue",
                fontWeight: "bold",
                ml: 5,
              }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              endIcon={<AppRegistrationIcon />}
              sx={{
                fontWeight: "bold",
                ml: 2,
              }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>{" "}
    </Box>
  );
};

export default MainNavigation;
