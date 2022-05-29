//props.threshold     : threshold for scroll event to call function. default: 100
//props.elevation     : amount to elevate between 1-24

import React from "react";
import { useScrollTrigger, useTheme } from "@mui/material";

export default function ScrollToElevate(props) {
  const theme = useTheme();

  const { threshold, elevation, children, ...other } = {
    threshold: 10,
    elevation: 10,
    ...props
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });
  
  return React.cloneElement(children, {
    style: {
      boxShadow: trigger ? theme.shadows[elevation] : "none",
      transition: theme.transitions.create("box-shadow", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    ...other
  });
}
