import React, { Fragment, Component } from 'react'
import { default as MUIAppBar } from '@mui/material/AppBar';
import { Toolbar, Typography, CssBaseline, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import ScrollToElevate from 'components/ScrollToElevate';
import SearchBar from 'containers/SearchBar';
import customPalette from '../../constants/customPalette';

class AppBar extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline />
                <span id="back-to-top-anchor" />
                <ScrollToElevate threshold={1} elevation={100}>
                    <MUIAppBar position="sticky" sx={{ backgroundColor: 'white' }}>
                        <Toolbar>
                            <Typography variant="h4" color={customPalette.flickrPink} sx={{ fontWeight: 'bold' }}>
                                Flickr
                            </Typography>
                            <Typography variant="h4" color={customPalette.flickrBlue} sx={{ fontWeight: 'bold' }}>
                                Rangr
                            </Typography>
                            <SearchBar />
                            <IconButton href={`https://github.com/miabalogh/cv-tricks.com`} target={`_blank`}>
                            <GitHub sx={{color: customPalette.flickrBlue}}/>
                            </IconButton>
                        </Toolbar>
                    </MUIAppBar>
                </ScrollToElevate>
            </Fragment>


        );
    }
}

export default AppBar