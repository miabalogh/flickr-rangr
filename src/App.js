import React from 'react';
import AppBar from 'containers/AppBar'
import ImageListContainer from 'containers/ImageListContainer'
import ScrollToTopFab from 'components/ScrollToTopFab';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import globalTheme from 'constants/customTheme';



function App() {
  return (
    <ThemeProvider theme={createTheme(globalTheme)}>
      <div className="App">
        <AppBar />
        <ImageListContainer />
        <ScrollToTopFab />
      </div>
    </ThemeProvider>
  );
}

export default App;