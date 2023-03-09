import { FC } from "react";

import Link from "next/link";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

const MainLogo: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Link href="/">
        <IconButton size="large" edge="end" aria-label="logo" disableRipple>
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
  );
};

export default MainLogo;
