import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
    homeScreenGridItem: {
        backgroundColor: theme.palette.common.darkBrown,
        padding: '2em',
        cursor: 'pointer',
        transition: '3s',
        gridColumn: 1,
        '&:hover': {
            backgroundColor: theme.palette.common.lightBrown,
        }
    },
    textWrapper: {
        padding: '3em',
        width: '80%',
        transition: '3s',
        margin: '10px 2em'
    },
    textItem: {
        transition: '0s',
        maxWidth: '190%',
    }
}))

interface HomeScreenGridItemProps {
    title: string;
    imgID: string;
    text: string;
    align: string;
}

export const HomeScreenGridItem: React.FC<HomeScreenGridItemProps> = ({ title, imgID, text, align }) => {
    const classes = useStyles();

    return (
        <Grid item container alignItems='center'
            justify='center'
            className={classes.homeScreenGridItem}
        >
            <Grid item style={{ width: '10%', order: align === 'right' ? 2 : 1 }}>
                <img src={imgID} alt='logo' />
            </Grid>
            <Grid item container className={classes.textWrapper} style={{ order: align === 'right' ? 1 : 2 }} >
                <Grid item style={{ width: '100%' }}>
                    <Typography variant='h3' className={classes.textItem} style={{ width: '100%' }} align={align === 'right' ? 'right' : 'left'} >
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1' className={classes.textItem} align={align === 'right' ? 'right' : 'left'}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>
        </Grid >
    )
}