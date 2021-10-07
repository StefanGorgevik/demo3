import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { loremIpsum } from 'lorem-ipsum';
import { HomeScreenGridItem } from '../../components/HomeScreenGridItem';

const useStyles = makeStyles((theme: any) => ({
    homeScreenGrid: {
        width: '100%',
        backgroundImage: 'linear-gradient(to right,#242020, #000)',
        transition: '2s',
        boxShadow: '0px 1px 4px white'
    },
    homeScreenGridItem: {
        backgroundColor: theme.palette.common.lightBeige,
        width: '98%',
        margin: '0 auto',
        padding: '2em'
    }
}))

const HomePage: React.FC = () => {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1000)
    }, [])
    return (
        <Grid container style={{ height: '100%' }}>
            <Grid item container className={classes.homeScreenGrid} justify='center' alignItems='center' style={{
                height: loaded ? '150px' : '100vh'
            }}>
                <Grid item>
                    <Typography variant='h2' color='primary'>
                        Lorem Ipsum
                    </Typography>
                </Grid>
            </Grid>


            <Grid item container alignItems='center' direction='row' className={classes.homeScreenGridItem}>
                <Grid item>
                    <img src="https://picsum.photos/200" alt='logo' />
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1'>
                        {loremIpsum({ count: 5, format: 'plain' })}
                    </Typography>
                </Grid>
            </Grid >

            <Grid item container alignItems='center' direction='row' className={classes.homeScreenGridItem}>

                <Grid item style={{ order: 2 }}>
                    <Typography variant='subtitle1'
                        style={{
                            width: '80em'
                        }}>
                        {loremIpsum({ count: 5, format: 'plain' })}
                    </Typography>
                </Grid>
                <Grid item style={{ order: 1 }}>
                    <img src="https://picsum.photos/200" alt='logo' />
                </Grid>
            </Grid>
        </Grid >
    )
}

export default HomePage;