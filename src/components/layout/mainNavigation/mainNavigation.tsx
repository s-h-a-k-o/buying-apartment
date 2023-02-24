import { FC, useState } from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import MainLeftSide from "./mainLeftSide/mainLeftSide";
import ProfileMenu from "./profileMenu/ProfileMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

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
          <MainLeftSide />
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
                  className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] "
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    ml: { xs: 0.5, sm: 2, md: 1 },
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      md: "18px",
                    },
                  }}
                >
                  Apartments
                </Typography>
              </IconButton>
            </Link>
          </Box>

          {/* menu with login and sign-up */}
          <ProfileMenu />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
            <Button color="inherit" sx={{ color: "black", fontWeight: "bold" }}>
              Sell
            </Button>
            <Button color="inherit" sx={{ color: "black", fontWeight: "bold" }}>
              Apartments
            </Button>
            <Button color="inherit" sx={{ color: "black", fontWeight: "bold" }}>
              Contact
            </Button>
            <Link href="/user/login">
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<LoginIcon />}
                sx={{
                  color: "blue",
                  fontWeight: "bold",
                  ml: 3,
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
                  ml: 2,
                }}
              >
                Sign up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>{" "}
    </Box>
  );
};

export default MainNavigation;
