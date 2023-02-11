import { FC, useState } from "react";
import Link from "next/link";
import {
  Drawer,
  Box,
  Button,
  Typography,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import ShopIcon from "@mui/icons-material/Shop";
import SellIcon from "@mui/icons-material/Sell";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const bottomBorder = (
  <Box
    sx={{
      width: "100%",
      height: "1px",
      background: "#212121",
    }}
  />
);

const MainRightSide: FC = () => {
  const [drawerOpen, setDrowerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: { md: "none" } }}>
      <IconButton
        sx={{
          color: "#212121",
          margin: { xs: -2, sm: -1 },
        }}
        size="large"
        edge="start"
        aria-label="logo"
        onClick={() => setDrowerOpen(true)}
      >
        <MenuIcon
          sx={{
            width: { sx: "25px", sm: "35px" },
            height: { sx: "25px", sm: "35px" },
          }}
        />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrowerOpen(false)}
      >
        <Box
          width="250px"
          role="presentation"
          sx={{
            height: "100%",
            padding: 2,
            textAlign: "center",
            background: "#e3f2fd",
          }}
        >
          <Box
            sx={{
              marginBottom: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Apartments
            </Typography>
            <IconButton
              onClick={() => {
                setDrowerOpen(false);
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          {bottomBorder}
          <Stack
            spacing={6}
            sx={{
              width: "100%",
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<HomeIcon />}
              sx={{
                color: "black",
                fontWeight: "bold",
                width: "150px",
              }}
            >
              {" "}
              <Link href="/">Home</Link>
            </Button>

            <Button
              variant="outlined"
              id="button-id"
              color="inherit"
              onClick={handleClick}
              aria-controls={open ? "menu-id" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              startIcon={<ShopIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ color: "black", fontWeight: "bold", width: "150px" }}
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
                }}
              >
                Property Type
              </Typography>
              {bottomBorder}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
              variant="outlined"
              color="inherit"
              startIcon={<SellIcon />}
              sx={{
                color: "black",
                fontWeight: "bold",
                width: "150px",
              }}
            >
              Sell
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<ApartmentIcon />}
              sx={{
                color: "black",
                fontWeight: "bold",
                width: "150px",
              }}
            >
              Apartments
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<ContactPageIcon />}
              sx={{
                color: "black",
                fontWeight: "bold",
                width: "150px",
              }}
            >
              Contact
            </Button>
          </Stack>
          <Box sx={{ marginTop: 15 }}>
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: "bold", marginBottom: 2 }}
            >
              Join us
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FacebookIcon
                titleAccess="Like us on Facebook"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.facebook.com/apartments");
                }}
              />
              <InstagramIcon
                titleAccess="Folwow us on Instagram"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.instagram.com/apartments");
                }}
              />
              <TwitterIcon
                titleAccess="Follow us on Twitter"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://twitter.com/apartments");
                }}
              />
              <YouTubeIcon
                titleAccess="Follow our YouTube channel"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.youtube.com/apartments");
                }}
              />
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MainRightSide;
