import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    height: "100%",
    position: 'fixed',
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    background: 'red'
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <form
      //onSubmit={checkFields()}
      >
        Login form
      </form>
    </div>
  );
};

export default Login;
