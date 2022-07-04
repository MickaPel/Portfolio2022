import React from 'react';
import 'animate.css';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
        color: "#A4B787",
        margin:'auto',
        marginTop: 20,
        textDecoration: "underline",
        transition: "color 1s",
        "&:hover": {
            color: "#DDDDDD" 
        }
    },
    title2: {
        color: "#E2C275",
        margin:'auto',
        marginTop: 20,
        transition: "color 2s",
        "&:hover": {
            color: "#DDDDDD" 
        }
    },
    title3: {
        color: "#E2C275",
        margin:'auto',
        marginTop: 20,
        marginBottom: 20,
        transition: "color 2s",
        "&:hover": {
            color: "#DDDDDD" 
        }
    },
});

export default function Technologies() {

    const classes = useStyles();

    const matches = useMediaQuery('(min-width:600px)');

        return (
            <div style={{width: matches ? 590 : "90%", 
            marginTop: 150
            }}>
                <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={6}>
                    <span className="TechnologiesTitle"
                    >Technologies</span>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{marginTop: 100, border: " 5px double #D0CAB2",
                    borderRadius: "10px", boxShadow: "black 0px 5px 15px", marginBottom: 100}}
                    >
                        <h1 className={classes.title}>
                            Front-End Developer
                        </h1>
                        <h2 className={classes.title}>
                            Languages I speak:
                        </h2>
                        <h3 className={classes.title2}>
                            Javascript
                        </h3>
                        <h3 className={classes.title2}>
                            HTML
                        </h3>
                        <h3 className={classes.title2}>
                            CSS
                        </h3>
                        <h2 className={classes.title}>
                            Framework:
                        </h2>
                        <h3 className={classes.title2}>
                            React.js
                        </h3>
                        <h2 className={classes.title}>
                            Tools:
                        </h2>
                        <h3 className={classes.title2}>
                            Redux
                        </h3>
                        <h3 className={classes.title2}>
                            Git
                        </h3>
                        <h3 className={classes.title2}>
                            Github
                        </h3>
                        <h3 className={classes.title2}>
                            GitLab
                        </h3>
                        <h3 className={classes.title3}>
                            Material-UI
                        </h3>
                </Grid>
            </div>
        );
    }
