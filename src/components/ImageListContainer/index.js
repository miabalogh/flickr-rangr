import React, { Component, Fragment } from 'react';
import { deepmerge } from '@mui/utils';
import { default as MUIImageList } from '@mui/material/ImageList';
import { Box, ImageListItem, ImageListItemBar, Typography, CircularProgress, IconButton, Tooltip, Link } from '@mui/material';
import { PhotoCamera, Event, Tag, OpenInNew, KeyboardArrowRight } from '@mui/icons-material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import globalTheme from 'constants/customTheme';
import customPalette from 'constants/customPalette';

const customTheme = {
    components: {
        MuiImageListItem: {
            styleOverrides: {
                img: {
                    borderRadius: '16px'
                },
            },
        },
        MuiImageListItemBar: {
            styleOverrides: {
                root: {
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px'
                },
                title: {
                    textAlign: 'left',
                    fontWeight: '500',
                },
                titleWrap: {
                    padding: '8px 12px'
                }
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: customPalette.flickrBlue,
                }

            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '&:hover': { backgroundColor: `${customPalette.flickrPink}90` },
                }
            }
        }

    },
};


const ProgressSpinner = (props) => {
    return (
        <Fragment>
            <Box sx={{ display: 'flex', mb: 4, mt: 5, alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress size='4rem' sx={{ color: customPalette.flickrPink }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: '400' }}>Loading images...</Typography>
        </Fragment>
    )
}

const ImageInfo = (props) => {
    return (
        <Fragment>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                mt: '1px'
            }}>
                <PhotoCamera fontSize='small' />
                <Typography sx={{ ml: '0.5em' }} variant='caption'>
                    {props.author}
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <Event fontSize='small' />
                <Typography sx={{ ml: '0.5em' }} variant='caption'>
                    {props.date}
                </Typography>
            </Box>

        </Fragment>
    )
}

const NoResults = (props) => {
    return (<Box sx={{ mt: 6 }}>
        <div style={{ fontSize: '2em' }}>
            Hmmmm, we couldn't find any images matching <strong>{props.tagMode}</strong> of
        </div>
        <div style={{ fontSize: '1.5em', marginBottom: '2em' }}>
            <p>{'#' + props.tags.replaceAll(',', ' #')}</p>
        </div>
        <div style={{ fontSize: '1.25em' }}>
            <p>We suggest try a different tag mode or tags combination
                <br />
                Discover more at&nbsp; 
                <Link target={'_blank'} href={`https://www.flickr.com/photos/`}>https://www.flickr.com/photos/</Link>
            </p>
        </div>

        {/* <Typography variant='h5'>Hmmmm, we couldn't find any images matching {props.tagMode} of {props.tags}</Typography>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>{props.tagMode}</Typography> */}
    </Box>)
}


class ImageListContainer extends Component {
    state = {}

    render() {
        const { isDataFetching, data, tags, tagMode } = this.props


        const content = (
            isDataFetching ? <div></div> :
                <Fragment>
                    <MUIImageList variant='woven' cols={5} sx={{ ml: 6, mr: 6, mt: 4 }}>

                        {data.items.map((item) => (

                            <ThemeProvider theme={createTheme(deepmerge(globalTheme, customTheme))}>
                                <ImageListItem key={item.media.m}>
                                    <img
                                        src={`${item.media.m}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.media.m}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <Fragment>
                                        <ImageListItemBar
                                            title={<Tooltip title={item.title} placement='top-start'><span>{item.title}</span></Tooltip>}
                                            subtitle={<ImageInfo author={item.author} date={item.date_taken} />}
                                            actionIcon={
                                                <Tooltip
                                                    title={'#' + item.tags.replaceAll(' ', ' #')}
                                                    sx={{ fontSize: '0.5em' }}>
                                                    <IconButton
                                                        size='small'
                                                        aria-label={`${item.title}'s tags`}
                                                        sx={{ mr: '4px' }}
                                                    >
                                                        <Tag sx={{ transform: 'skewX(345deg)' }} />
                                                    </IconButton>
                                                </Tooltip>
                                            }
                                        />
                                        <ImageListItemBar
                                            sx={{ backgroundColor: 'transparent' }}
                                            position={'top'}
                                            actionIcon={
                                                <Tooltip title='Open image in Flickr' placement='top'>
                                                    <IconButton
                                                        size='small'
                                                        href={item.link}
                                                        target={'_blank'}
                                                        sx={{ mt: '4px', mr: '4px' }}
                                                    >
                                                        <OpenInNew />
                                                    </IconButton>
                                                </Tooltip>
                                            }
                                        />
                                    </Fragment>
                                </ImageListItem>
                            </ThemeProvider>
                        ))
                        }
                    </MUIImageList>

                    <Box sx={{ backgroundColor: '#00000080', paddingBottom: '0.5em' }}>
                        <Typography variant='caption' sx={{
                            fontSize: '1.25rem',
                            fontStyle: 'italic',
                            color: 'white',
                            mr: '0.5em'
                        }}>
                            Discover more images
                        </Typography>
                        <IconButton size='small'
                            href={data.discoverLink}
                            target={'_blank'}
                            sx={{
                                color: 'white',
                                backgroundColor: customPalette.flickrBlue,
                                '&:hover': { backgroundColor: customPalette.flickrBlueDarker }
                            }}>
                            <KeyboardArrowRight fontSize='small' />
                        </IconButton>
                    </Box>

                </Fragment>
        )

        return isDataFetching ? <ProgressSpinner /> : (data.items.length > 0 ? content : <NoResults tags={tags} tagMode={tagMode} />)

    }
}

export default ImageListContainer
