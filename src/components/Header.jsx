import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
    color: "black",
  },
  toolbar: {
    padding: 0,
  },
  headerOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  headerLinks: {
    color: "inherit",
  },
}));
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
            <Typography variant="h6" className={classes.title}>
              Portfolio
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
