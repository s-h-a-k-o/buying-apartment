import { FC } from "react";

import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterSocialIcons: FC = () => {
  return (
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
  );
};

export default FooterSocialIcons;
