import React from "react";
//import { Link } from "react-router-dom";

// Theme
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Components
import Drawer from "./Drawer";
import { YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        margin: 0,
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    adminOptions: {
        marginLeft: theme.spacing(1),
    },
}));

function MainAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>

                    <Grid
                        container
                        justify="center"
                        style={{ paddingLeft: "60px" }}
                    >
                        
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            <YouTube />
                                TrollTube
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer/>
        </div>
    );
}

export default MainAppBar;