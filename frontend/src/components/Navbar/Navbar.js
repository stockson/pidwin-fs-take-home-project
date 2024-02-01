import React, { useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import { styles } from "./styles";
// import getUser from "../../util/getUser.js"
import { getToken } from "../../util/localStorage";
import * as messages from "../../messages";

const Navbar = () => {
  // const initUser = getUser() // move to App, include game ?
  // const [user, setUser] = useState( initUser );
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  let location = useLocation();
  const history = useNavigate();

  const logout = () => {

    // not sure how to do parent reducer for both
    dispatch({ type: actionType.LOGOUT });
    dispatch({ type: actionType.GAME_LOGOUT });

    history("/auth");
    // setUser("null"); // dispatch should handle this?
  };

  // const restartHandle = () => {
  //   // dispatch({ type: actionType.RESTART });
  //   dispatch(restart(history));
  //   const resetUser = getUser()
  //   setUser( resetUser )
  // }
  const user = profile
  const loggedIn = user && user.name

  // move this out of NavBar
  useEffect(() => {
    if (loggedIn) {
      const tokenData = getToken()
      if (!tokenData) {
        messages.error("Local Storage Data Missing, Logging Out")
        return logout()
      }
      if (tokenData.decode.exp * 1000 < new Date().getTime()) {
        messages.error("Login Expired, Logging Out")
        logout();
      }
    }
    // const defUser = getUser()
    // setUser(defUser);
  }, [location]);


  return (
    <div style={styles.appBarWrap}>
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <div style={styles.brandContainer}>
          <Typography
            component={Link}
            to="/"
            sx={styles.heading}
            variant="h5"
            align="center"
          >
            CoinToss
          </Typography>
        </div>
        <Toolbar sx={styles.toolbar}>
          {loggedIn ? (
            <div style={styles.profile}>
              <Avatar sx={styles.purple} alt={user.name} src={user.picture}>
                {user.name.charAt(0)}
              </Avatar>
              <Typography sx={styles.userName} variant="h6">
                {user.name}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  history("/password");
                }}
              >
                Set Password
              </Button>
              {/* <Button
                variant="contained"
                color="secondary"
                onClick={restartHandle}
              >
                Restart
              </Button> */}
              <Button
                variant="contained"
                sx={styles.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
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
