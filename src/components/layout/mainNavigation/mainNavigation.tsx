import { FC } from "react";
import { AppBar, Box, Stack, Toolbar, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";

const MainNavigation: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      <AppBar position="static" sx={{ background: "#e8eaf6" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Link href="/">
              <IconButton
                size="medium"
                edge="start"
                aria-label="logo"
                disableRipple
              >
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={70}
                  height={70}
                  priority
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "black", fontWeight: "bold", ml: 2 }}
                >
                  Apartments
                </Typography>
              </IconButton>
            </Link>
          </Box>

          <Box>
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
              sx={{
                color: "blue",
                fontWeight: "bold",
                ml: 5,
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>{" "}
    </Box>
  );
};

export default MainNavigation;
