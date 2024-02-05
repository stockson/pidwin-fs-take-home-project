import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
// import * as actionType from "../../constants/actionTypes";
// import * as messages from "../../messages";
import { logout } from "../../actions/login/index.js";
import { restart } from "../../actions/game/index.js";
import "./Navbar.css";

const Navbar = () => {
  const profile = useSelector((state) => state.profile);
  // const token = useSelector((state) => state.token);

  const [anchorElUser, setAnchorElUser] = useState(null)

  const dispatch = useDispatch();
  // let location = useLocation();
  const history = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = profile
  const loggedIn = profile;

  const logoutHandler = () => {
    setAnchorElUser(null);
    logout(dispatch, history);
  }
  const passwordHandler = () => {
    setAnchorElUser(null);
    history("/password");
  }
  const restartHandler = () => {
    setAnchorElUser(null);
    dispatch(restart());
  }

  // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const profileLinks = [
    { title: "Change Password", onClick: passwordHandler },
    { title: "Restart", onClick: restartHandler },
    { title: "Logout", onClick: logoutHandler },
  ]

  if (!profile) return null

  return (
    <div style={styles.appBarWrap}>
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <div>
          <Typography
            component={Link}
            to="/"
            sx={styles.heading}
            variant="h5"
            align="center"
          >
            <div id="logo">
              <span>Coin</span>
              <span>Toss</span>
            </div>
          </Typography>
        </div>
        <Toolbar sx={styles.toolbar}>
          {loggedIn ? (
            <div style={styles.profile}>
              <Typography sx={styles.userName} variant="h6">
                {user.name}
              </Typography>
              <Avatar
                sx={{...styles.purple, cursor: 'pointer'}}
                alt={user.name}
                src={user.picture}
                onClick={handleOpenUserMenu}
              >
                {user.name.charAt(0)}
              </Avatar>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {profileLinks.map(({title, onClick}) => (
                  <MenuItem key={title} onClick={onClick}>
                    <Typography textAlign="center">{title}</Typography>
                  </MenuItem>
                ))}
              </Menu>


              {/* <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  history("/password");
                }}
              >
                Set Password
              </Button>
              <Button
                variant="contained"
                sx={styles.logout}
                color="secondary"
                onClick={logoutHandler}
              >
                Logout
              </Button> */}
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
