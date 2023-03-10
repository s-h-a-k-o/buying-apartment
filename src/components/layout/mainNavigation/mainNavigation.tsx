import { FC, useState } from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import MainLeftSide from "./mainLeftSide/mainLeftSide";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/system";
import { API } from "@/api/Api";

import { useRouter } from "next/router";
import ProfileMenu from "./profileMenu/ProfileMenu";
import AccountMenu from "./profileAvatar/ProfileAvatar";
import MainLogo from "./mainLogo/MainLogo";

const bottomBorder = (
  <Box
    sx={{
      width: "100%",
      height: "1px",
      background: "#212121",
    }}
  />
);

const MainNavigation: FC = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [logout, setLogout] = useState(true);

  const profileId = router.query.id;

  const open = Boolean(anchorEl);

  console.log(API);
  console.log(router);

  const logoutHandler = () => {
    API.setToken("");
    router.push("/user/login");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar position="static" sx={{ background: "#e8eaf6" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* left menu for small screens */}
          <MainLeftSide />

          {/* apartment logo */}
          <MainLogo />

          {/* menu with login and sign-up */}
          <ProfileMenu />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                id="button-id"
                color="inherit"
                onClick={handleClick}
                aria-controls={open ? "menu-id" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Buy
              </Button>
              <Menu
                id="menu-id"
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{ "aria-labelledby": "button-id" }}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ marginTop: 0.5 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    padding: 2,
                    color: "black",
                  }}
                >
                  Apartments Type
                </Typography>
                {bottomBorder}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <MenuItem
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      color: "#1565c0",
                    }}
                  >
                    Any
                  </MenuItem>
                  <MenuItem
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      color: "#1565c0",
                    }}
                  >
                    Family-Home
                  </MenuItem>
                  <MenuItem
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      color: "#1565c0",
                    }}
                  >
                    Townhome
                  </MenuItem>
                  <MenuItem
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      color: "#1565c0",
                    }}
                  >
                    Flat
                  </MenuItem>
                  <MenuItem
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      color: "#1565c0",
                    }}
                  >
                    Land
                  </MenuItem>
                </Box>
              </Menu>

              <Button
                color="inherit"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Sell
              </Button>
              <Button
                color="inherit"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Apartments
              </Button>
              <Button
                color="inherit"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </Stack>

            {!profileId && (
              <Stack direction="row" spacing={1} marginLeft={1}>
                <Link href="/user/login">
                  <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<LoginIcon />}
                    sx={{
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    sign in
                  </Button>
                </Link>
                <Link href="/user/sign-up">
                  <Button
                    variant="outlined"
                    endIcon={<AppRegistrationIcon />}
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Sign up
                  </Button>
                </Link>
              </Stack>
            )}

            {profileId && <AccountMenu logoutBtn={logoutHandler} />}
          </Box>
        </Toolbar>
      </AppBar>{" "}
    </Box>
  );
};

export default MainNavigation;
