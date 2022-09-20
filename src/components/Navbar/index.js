import React, { Fragment, useContext, useState } from "react";
import { IconButton, Toolbar, Tooltip, MuiLink } from "@mui/material";
import { Squash as Hamburger } from "hamburger-react";
import { Box, CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import { StyledToolbar, StyledAppBar, StyledNavLogo } from "./styles";
import { ContactButton, NavLink } from "./styles";
import { navLinks } from "./NavData";
import ElevationScroll from "./ElevationScroll";
import ThemeContext from "../../ThemeContext";
import Link from "../../Link";
import { motion } from "framer-motion";

const NavBar = ({ children }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const themeTitle =
    theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...children}>
        <StyledAppBar
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          color="inherit"
        >
          <StyledToolbar>
            <StyledNavLogo variant="h5">Henry</StyledNavLogo>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map(({ id, page, title }) => (
                <NavLink component={Link} key={id} href={page} underline="none">
                  {title}
                </NavLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <ContactButton
                component={MuiLink}
                href="mailto:mezebu07@gmail.com?Subject=Hey Henry!✋"
                target="_blank"
                rel="noopener"
              >
                Contact Me
              </ContactButton>
              <Tooltip title={`${themeTitle} mode`}>
                <IconButton onClick={toggleTheme}>
                  {theme.palette.mode === "dark" ? (
                    <NightsStayRoundedIcon fontSize="medium" />
                  ) : (
                    <LightModeRoundedIcon fontSize="medium" />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <IconButton
              color="inherit"
              size="small"
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <Hamburger
                toggled={isHamburgerOpen}
                toggle={setIsHamburgerOpen}
                size={20}
              />
            </IconButton>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
};

export default NavBar;