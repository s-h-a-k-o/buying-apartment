import { FC } from "react";
import Image from "next/image";
import {
  Box,
  Stack,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container } from "@mui/system";

const Footer: FC = () => {
  return (
    <>
      <Box sx={{ background: "#212121", paddingY: 5 }}>
        <Container>
          {/* apartment logo */}
          <Box>
            <IconButton
              size="large"
              edge="start"
              aria-label="logo"
              disabled
              disableRipple
            >
              <Image
                src={"/logo.png"}
                alt="logo"
                width={70}
                height={70}
                priority
                className=" w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-gray-200 rounded-[35px]"
              />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  ml: { xs: 0.5, sm: 2 },
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                Apartments
              </Typography>
            </IconButton>
          </Box>

          {/* social media icons */}
          <Grid container marginTop={5}>
            <Grid item xs={1.5} sm={1}>
              <FacebookIcon
                fontSize="large"
                titleAccess="Like us on Facebook"
                sx={{ cursor: "pointer", color: "white" }}
                onClick={() => {
                  window.open("https://www.facebook.com/apartments");
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1}>
              <InstagramIcon
                fontSize="large"
                titleAccess="Folwow us on Instagram"
                sx={{ cursor: "pointer", color: "white" }}
                onClick={() => {
                  window.open("https://www.instagram.com/apartments");
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1}>
              <TwitterIcon
                fontSize="large"
                titleAccess="Follow us on Twitter"
                sx={{ cursor: "pointer", color: "white" }}
                onClick={() => {
                  window.open("https://twitter.com/apartments");
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1}>
              <YouTubeIcon
                fontSize="large"
                titleAccess="Follow our YouTube channel"
                sx={{ cursor: "pointer", color: "white" }}
                onClick={() => {
                  window.open("https://www.youtube.com/apartments");
                }}
              />
            </Grid>
          </Grid>

          {/* footer navigation */}
          <Grid container marginTop={4} rowGap={1.5}>
            <Grid item xs={6} sm={3} md={1.2} textAlign="center">
              <Button size="small" sx={{ color: "white" }}>
                {" "}
                About us
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={1.2} textAlign="center">
              <Button size="small" sx={{ color: "white" }}>
                {" "}
                News
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={1.2} textAlign="center">
              <Button size="small" sx={{ color: "white" }}>
                {" "}
                Privacy
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={1.2} textAlign="center">
              <Button size="small" sx={{ color: "white" }}>
                {" "}
                Feedback
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={1.2} textAlign="center">
              <Button size="small" sx={{ color: "white" }}>
                {" "}
                Terms
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={1.2} textAlign="center">
              <Button size="small" sx={{ color: "white" }}>
                {" "}
                Contact
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={1.2} textAlign="center">
              <Button size="small" sx={{ color: "white" }}>
                {" "}
                Partners
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 5 }}>
            <Typography variant="body2" sx={{ color: "white" }}>
              Copyright © 2023 Apartments.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
