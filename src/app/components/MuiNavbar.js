"use client";
import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyIcon from '@mui/icons-material/Key';
import jsphlogo from "../assets/main-logo.png";
import Image from "next/image";
import { SESSION_WORKGROUP_ID_KEY } from "../data/constants";
import { Avatar, Fade, IconButton, Tooltip } from "@mui/material";
import { NAVBAR_MODULES, USER_SETTINGS } from "../data/Navbar";
import { Form, InputGroup } from "react-bootstrap";

export const MuiNavbar = ({workgroup}) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenus, setOpenMenus] = React.useState({});
  const [workGroupSessionKey, setWorkGroupSessionKey] = React.useState("");

  React.useEffect(() => {
    const storedValue = sessionStorage.getItem(SESSION_WORKGROUP_ID_KEY); // to be change to const variables

    if(storedValue){
      setWorkGroupSessionKey(storedValue);
    }
  }, [])


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (event, module) => {
    setAnchorEl(event.currentTarget);
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [module]: true,
    }));
  };

  const handleClose = (module) => {
    setAnchorEl(null);
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [module]: false,
    }));
  };



  // * List all the modules and menu
  const ModuleMenu = () => {
    return Object.keys(NAVBAR_MODULES).map((module) => (
      <Menu
        id={`menu-${module}`}
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={openMenus[module] || false}
        onClose={() => handleClose(module)}
        TransitionComponent={Fade}
        key={module}
      >
        {NAVBAR_MODULES[module].map((list) => (
          <Link
            onClick={() => handleClose(module)}
            href={list.route}
            key={list.id}
          >
            <MenuItem>{list.label}</MenuItem>
          </Link>
        ))}
      </Menu>
    ));
  };



  return (
    <AppBar style={{position: 'fixed'}}>
      <Container maxWidth="">
        <Toolbar disableGutters>
          <Image alt="logo" src={jsphlogo} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mx: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            4M/1E
          </Typography>

          {/* Add the list of pages to be access */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.keys(NAVBAR_MODULES).map((module) => (
              <Button
                id="fade-button"
                aria-controls={openMenus ? `menu-${module}` : undefined}
                aria-haspopup="true"
                aria-expanded={openMenus ? "true" : undefined}
                onClick={(event) => handleClick(event, module)}
                key={module}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {module}
              </Button>
            ))}
            <ModuleMenu />
          </Box>

          <Box sx={{ flexGrow: 0, mr: 5 }}>
            <InputGroup>
              <InputGroup.Text><KeyIcon /></InputGroup.Text>
              <Form.Control
                placeholder="Work Group ID"
                disabled
                value={workgroup || workGroupSessionKey}
              />
            </InputGroup>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open user settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {USER_SETTINGS.map((setting) => (
                <Link
                  onClick={handleCloseUserMenu}
                  href={setting.route}
                  key={setting.id}
                >
                  <MenuItem>
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
