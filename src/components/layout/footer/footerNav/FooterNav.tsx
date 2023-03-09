import { FC } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const FooterNav: FC = () => {
  return (
    <>
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
          © 1995-2023. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default FooterNav;
