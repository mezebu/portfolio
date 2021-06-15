import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Button,
  IconButton,
  Toolbar,
  MenuItem,
  Menu,
  AppBar,
  Typography,
} from "@material-ui/core";
import "animate.css";

import useStyles from "./styles";

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { history } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleLinkClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerOptions}>
            <Typography variant="h5" className={classes.title}>
              <div className="animate__animated animate__flipInX">Ezeigwe</div>
            </Typography>

            <div>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    onClick={handleMenu}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleMenuClick("/")}>
                      Home
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick("/about")}>
                      Skills
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick("/projects")}>
                      Projects
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick("/contact")}>
                      Contact
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div>
                  <Button
                    color="inherit"
                    className={classes.headerLinks}
                    onClick={() => handleLinkClick("/")}
                  >
                    Home
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.headerLinks}
                    onClick={() => handleLinkClick("/about")}
                  >
                    Skills
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.headerLinks}
                    onClick={() => handleLinkClick("/projects")}
                  >
                    Projects
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.headerLinks}
                    onClick={() => handleLinkClick("/contact")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
