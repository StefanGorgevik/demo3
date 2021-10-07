import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { loremIpsum } from 'lorem-ipsum';

const useStyles = makeStyles((theme: any) => ({
    homeScreenGrid: {
        width: '100%',
        backgroundImage: 'linear-gradient(to right,#242020, #000)',
        transition: '2s',
        boxShadow: '0px 1px 4px white'
    },
    homeScreenGridItem: {
        backgroundColor: theme.palette.common.lightBeige
    }
}))

export const HomeScreenGridItem = () => {
    const classes = useStyles();

    return (
        <Grid item container alignItems='center' className={classes.homeScreenGridItem}>
            <Grid item container>
                <Grid item>
                    <img src="https://picsum.photos/200" alt='logo' />
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1'>
                        {loremIpsum({ count: 50, format: 'plain' })}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}