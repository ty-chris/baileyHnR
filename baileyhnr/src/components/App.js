import React from "react";

import Home from "./Home";
import Login from "./Login";
import VideoDetail from "./VideoDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Theme
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    palette: {
      primary: {
        main: "#c62828",
      },
      secondary: "#2979ff",
    },
  },
});

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path={`/videos/:videoId`} component={VideoDetail} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
