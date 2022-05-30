import React from "react";
import { Zoom, useScrollTrigger, Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles"

import customPalette from 'constants/customPalette';

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ScrollToTopFab = (props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    console.log(anchor);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab size="medium" aria-label="scroll back to top"
          sx={{
            color: 'white',
            backgroundColor: customPalette.flickrBlue,
            '&:hover': { backgroundColor: customPalette.flickrBlueDarker }
          }}>
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollToTopFab;