import { FC, useState } from "react";
import Link from "next/link";
import { Drawer, Box, Button, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import ShopIcon from "@mui/icons-material/Shop";
import SellIcon from "@mui/icons-material/Sell";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactPageIcon from "@mui/icons-material/ContactPage";

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
  return (
    <Box sx={{ display: { md: "none" } }}>
      <IconButton
        sx={{ color: "#212121" }}
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
              color="inherit"
              startIcon={<ShopIcon />}
              sx={{
                color: "black",
                fontWeight: "bold",
                width: "150px",
              }}
            >
              Buy
            </Button>
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
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.facebook.com/apartments");
                }}
              />
              <InstagramIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.instagram.com/apartments");
                }}
              />
              <TwitterIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://twitter.com/apartments");
                }}
              />
              <YouTubeIcon
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
