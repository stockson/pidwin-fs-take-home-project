import { theme } from "../../../themes/Default";

import { deepPurple } from "@mui/material/colors";

export default {
  balance: {
		color: deepPurple[500],
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    fontFamily: "Tahoma",
    fontSize: "2.5rem",
    fontWeight: "600"
    // color: theme.palette.getContrastText(deepPurple[500]),
    // backgroundColor: deepPurple[500],
  },
};
