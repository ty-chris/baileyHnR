import React from "react";

import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    height: "auto",
    align: "center",
    margin: "auto",
    padding: "auto"
  }
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className={classes.home} onClick = {openDialog}>
        Content
      </div>
      <Dialog 
         open={open}
      >
        <Link to="/signup">
          <text>Sign up to continue</text>
          <Button variant="outlined" color="primary">
            SIGNUP
          </Button>
        </Link>
      </Dialog>
    </div>

  );
};

export default Home;
