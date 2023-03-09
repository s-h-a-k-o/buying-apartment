import { FC } from "react";
import Image from "next/image";
import { Box, IconButton, Typography, Grid } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container } from "@mui/system";
import FooterNav from "./footerNav/FooterNav";
import FooterSocialIcons from "./footerSocialIcons/FooterSocialIcons";

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
          <FooterSocialIcons />

          {/* footer navigation */}
          <FooterNav />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
