import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { loremIpsum } from 'lorem-ipsum';
import { HomeScreenGridItem } from '../../components/HomeScreenGridItem';

const useStyles = makeStyles((theme: any) => ({
    homeScreenGrid: {
        width: '100%',
        backgroundImage: 'linear-gradient(to right,#242020, #000)',
        transition: '2s',
        boxShadow: '0px 1px 4px white',
        position: 'fixed',
        marginBottom: '100px'
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
                height: loaded ? '100px' : '100vh'
            }}>
                <Grid item>
                    <Typography variant='h2' color='primary'>
                        Lorem Ipsum
                    </Typography>
                </Grid>
            </Grid>

            <HomeScreenGridItem title='Playlist' imgID='https://picsum.photos/200' text={loremIpsum({ count: 5, format: 'plain' })} />
            <HomeScreenGridItem title='Articles' imgID='https://picsum.photos/200' text={loremIpsum({ count: 5, format: 'plain' })} />
            <HomeScreenGridItem title='Discography' imgID='https://picsum.photos/200' text={loremIpsum({ count: 5, format: 'plain' })} />
            <HomeScreenGridItem title='Biography' imgID='https://picsum.photos/200' text={loremIpsum({ count: 5, format: 'plain' })} />


        </Grid >
    )
}

export default HomePage;