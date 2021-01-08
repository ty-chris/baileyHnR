import React from "react";

import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "./AppBar";

const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    height: "100%",
    position: 'fixed',
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    background: 'pink'
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
      <div className={classes.home} onClick={openDialog}>
        <AppBar />
        TrollTube
        Video Content
      </div>
      <Dialog
        open={open}
      >
        <Link to="/login">
          <Button variant="outlined" color="primary">
            Login to continue
          </Button>
        </Link>
      </Dialog>
    </div>

  );
};

export default Home;
