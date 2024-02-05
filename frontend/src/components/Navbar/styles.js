import { theme } from "../../themes/Default";

import { deepPurple } from "@mui/material/colors";

export const styles = {
  appBarWrap: {
    // padding: theme.spacing(4)
  },
  appBar: {
    // borderRadius: 5,
    borderRadius: 0,
    // margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "1000px",
  },
  profile: {
    display: "flex",
    justifyContent: "right",
    gap: "10px",
    width: "600px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    paddingRight: "5px",
  },
  // brandContainer: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
};
