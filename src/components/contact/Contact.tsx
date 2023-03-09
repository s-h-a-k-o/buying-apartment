import { FC } from "react";
import { Container, Grid, Link } from "@mui/material";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Contact: FC = () => {
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Contact</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6">
              E-mail:{" "}
              <Link href="mailto:info@apartments.com" underline="none">
                info@apartments.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6">
              Tel-Number:{" "}
              <Link href="tel:+995 599 599 599" underline="none">
                +995 599 599 599
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
