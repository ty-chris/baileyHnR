// Theme
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import AppBar from "./AppBar";

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
        <AppBar />
        TrollTube
      </MuiThemeProvider>
    </div>
  );
};

export default App;
