import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: 'white',
    justifyContent: "start"
}));

const Item2 = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "start",
    justifyContent: "start",
}));

const useStyles = makeStyles({
    typography: {
        textDecoration: 'none',
        color: '#B2B1B9',
        transition: "color 1s",
        "&:hover": {
            color: "#F0A500",
        }
    },
});

function Footer() {

    const classes = useStyles();

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div>
            {matches ?
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Item style={{textAlign: "start",}}>Copyright &copy; Mykhaylo Pelykh</Item>
                </Grid>
                <Grid item xs={2} sx={{ marginTop: 1}}>
                    <Item2 component="a" href="#Portfolio" className={classes.typography}>Portfolio</Item2>
                </Grid>
                <Grid item xs={2} sx={{ marginTop: 1}}>
                    <Item2 component="a" href="#Technologies" className={classes.typography}>Technologies</Item2>
                </Grid>
                <Grid item xs={2} sx={{ marginTop: 1}}>
                    <Item2 component="a" href="#Contact" className={classes.typography}>Contact</Item2>
                </Grid>
                <Grid item xs={1}>
                    <IconButton sx={{ color: "#B2B1B9", transition: "color 1s", "&:hover": {color: "#F0A500",}}} 
                                aria-label="upload picture" component="a" href="#Header">
                        <ArrowUpwardIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Grid>
            </Grid>
            </Box>
            :
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item2 component="a" href="#Portfolio" className={classes.typography}>Portfolio</Item2>
                    <Item2 component="a" href="#Technologies" className={classes.typography}>Technologies</Item2>
                    <Item2 component="a" href="#Contact" className={classes.typography}>Contact</Item2>
                </Grid>
                <Grid item xs={12}>
                <Item style={{textAlign: "center",}}>Copyright &copy; Mykhaylo Pelykh</Item>
                </Grid>
                <Grid item xs={12}>
                    <IconButton sx={{ color: "#B2B1B9", transition: "color 1s", "&:hover": {color: "#F0A500",}}} 
                                aria-label="upload picture" component="a" href="#Header">
                        <ArrowUpwardIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Grid>
            </Grid>
            </Box>}
        </div>
    )
}

export default Footer;
