import { FC, useState } from "react";
import { Box, Menu, MenuItem, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

const ProfileMenu: FC = () => {
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
      <Button
        id="button-id"
        onClick={handleClick}
        aria-controls={open ? "menu-id" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              width: { sx: "25px", sm: "25px" },
              height: { sx: "25px", sm: "25px" },
            }}
          />
        }
        sx={{ color: "#212121" }}
      >
        <AccountBoxIcon
          sx={{
            width: { sx: "25px", sm: "35px" },
            height: { sx: "25px", sm: "35px" },
          }}
        />
      </Button>
      <Menu
        id="menu-id"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "button-id" }}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Link href="/user/login">
          <MenuItem>
            <Avatar
              sx={{ width: 24, height: 24, marginRight: 1, marginBottom: 1 }}
            />{" "}
            Login
          </MenuItem>
        </Link>
        <Link href="/user/sign-up">
          <MenuItem>
            {" "}
            <Avatar sx={{ width: 24, height: 24, marginRight: 1 }} />
            Sign-up
          </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
