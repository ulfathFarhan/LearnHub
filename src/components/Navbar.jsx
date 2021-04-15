import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { IconButton, Toolbar, Typography, makeStyles } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles({
  header: {
    backgroundColor: "gold",
    color: "red",
    boxShadow: "0px 0px 0px 0px",
    height: "100px",
    border: "3px solid rgb(248, 10, 10)"
  },
  text: {
    paddingTop: "28px",
    fontWeight: "bold"
  },
  icon: {
    paddingTop: "39px"
  }
});
export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <IconButton
            arial-label="app"
            color="inherit"
            className={classes.icon}
          >
            <SchoolIcon />
          </IconButton>
          <Typography variant="h5" className={classes.text}>
            LEARN HUB
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
