import {
  Box,
  IconButton,
  useTheme,
  InputBase,
  AppBar,
  Toolbar,
  Stack,
  Button,
  styled,
  Menu,
  MenuItem,
  List,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext, useState } from "react";
import { ColorContext, tokens } from "../../theme";
import logo from "../../assets/logo.png";
import { NavButtonStyled } from "../../components/NavButtonStyled";
import { MenuItemStyled } from "../../components/MenuItemStyled";
import { Link } from "react-router-dom";
import { navLinkData } from "./NavlinkData";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = navLinkData.map((item, index) => {
    return (
      <Link to={`/${item.url}`}>
        <NavButtonStyled size="small">{item.pageName}</NavButtonStyled>
      </Link>
    );
  });

  return (
    <AppBar position="sticky" color="primary" component="nav">
      <Toolbar variant="dense">
        <IconButton
          size="small"
          edge="start"
          color="primary"
          aria-label="logo"
          sx={{ marginRight: 3 }}
          href="/"
        >
          <img src={logo} width={120} />
        </IconButton>
        <Stack direction="row" spacing={1} flexGrow={1}>
          {navLinks}
        </Stack>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <AccountCircle sx={{ width: 25, height: 25, color: "#666464" }} />
        </IconButton>
        <Menu
          id="user-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItemStyled onClick={handleClose}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Twoje Konto</ListItemText>
          </MenuItemStyled>
          <MenuItemStyled onClick={handleClose}>
            <ListItemIcon>
              <AdminPanelSettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Panel Admina</ListItemText>
          </MenuItemStyled>
          <MenuItemStyled onClick={handleClose}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Wyloguj</ListItemText>
          </MenuItemStyled>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
