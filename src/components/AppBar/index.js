import React, { Fragment, Component } from 'react'
import { default as MUIAppBar } from '@mui/material/AppBar';
import { Toolbar, Typography, CssBaseline, IconButton, Box } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import ScrollToElevate from 'components/ScrollToElevate';
import SearchBar from 'containers/SearchBar';
import customPalette from '../../constants/customPalette';

import { createTheme, ThemeProvider } from "@mui/material/styles";

const TagsLimitAlertMessage = () => {
    const customTheme = createTheme({
        components: {
            MuiToolbar: {
                styleOverrides: {
                    dense: {
                        minHeight: '20px',
                        height: '20px',
                    },
                },
            },
        }
    })
    const msg = `Search tags limit (10) reached. We recommend 10 or fewer tags for better search results.`

    return (
        <ThemeProvider theme={customTheme}>
            <Toolbar variant='dense' sx={{ ml: 30 }}>
                <Typography sx={{ color: customPalette.flickrPink, fontStyle: 'italic', fontSize: '0.75em' }}>{msg}</Typography>
            </Toolbar>
        </ThemeProvider>
    )
}

class AppBar extends Component {
    render() {
        const { tagsLimitReached } = this.props

        return (
            <Fragment>
                <CssBaseline />
                <span id="back-to-top-anchor" />
                <ScrollToElevate threshold={1} elevation={100}>
                    <MUIAppBar position="sticky" sx={{ backgroundColor: 'white' }}>
                        <Toolbar variant='regular'>
                            <Typography variant="h4" color={customPalette.flickrPink} sx={{ fontWeight: 'bold' }}>
                                Flickr
                            </Typography>
                            <Typography variant="h4" color={customPalette.flickrBlue} sx={{ fontWeight: 'bold' }}>
                                Rangr
                            </Typography>
                            <SearchBar />
                            <IconButton href={`https://github.com/miabalogh/flickr-rangr`} target={`_blank`}>
                                <GitHub sx={{ color: customPalette.flickrBlue }} />
                            </IconButton>
                        </Toolbar>
                        { tagsLimitReached ? <TagsLimitAlertMessage /> : <span /> }
                    </MUIAppBar>
                </ScrollToElevate>
            </Fragment>


        );
    }
}

export default AppBar