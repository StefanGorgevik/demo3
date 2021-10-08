import React, { useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
    homeScreenGridItem: {
        backgroundColor: theme.palette.common.lightBeige,
        padding: '2em',
        transition: '3s',
    },
    textWrapper: {
        padding: '3em',
        width: '90%', transition: '3s',
    },
    hoveredItem: {
        display: 'flex',
        flexDirection: 'column',
        transition: '3s',
    },
    normalItem: {
        flexDirection: 'row',
        transition: '3s',
    }
}))

interface HomeScreenGridItemProps {
    title: string;
    imgID: string;
    text: string;
}

export const HomeScreenGridItem: React.FC<HomeScreenGridItemProps> = ({ title, imgID, text }) => {
    const classes = useStyles();
    const [hover, setHover] = useState(false);

    return (
        <Grid item container alignItems='center'
            justify='center'
            className={classes.homeScreenGridItem}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} >
            <Grid item container className={hover ? classes.hoveredItem : classes.normalItem}>
                <Grid item style={{ width: '10%', justifyContent: hover ? 'center' : 'left' }}>
                    <img src={imgID} alt='logo' />
                </Grid>
                <Grid item container className={classes.textWrapper}>
                    <Grid item>
                        <Typography variant='h3' align={hover ? 'center' : 'left'}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' align={hover ? 'center' : 'left'}>
                            {text}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}