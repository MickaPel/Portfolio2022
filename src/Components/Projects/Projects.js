import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import AppliMeteo from "../Images/AppliMeteo.jpg";
import DivineStay from "../Images/DivineStay.jpg";
import PersoList from "../Images/PersoList.jpg";

const useStyles = makeStyles({
    root: {
        margin:"auto",
    },
    img: {
        width: "70%",
        height: "80%",
        margin: "25px",
        boxShadow: "#99A799 0px 5px 15px",
        transition: "transform .3s, color 1s",
        "&:hover": {
            transform: "scale(1.1)",
            color: "#F0A500",
        }
    }
});

function Projects() {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={6}>
                    <span 
                    className="ProjectTitle"
                    >Portfolio</span>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
            <Grid 
                container 
                align="center" 
                item xs={12} 
                spacing={3} 
                sx={{paddingTop: "80px"}}>
                <Grid item xs={12} md={6}>
                    <img src={AppliMeteo} alt="appli" className={classes.img}
                        onClick={() => window.open("https://meteo-react.vercel.app/admin/dashboard")}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={DivineStay} alt="appli" className={classes.img}
                        onClick={() => window.open("https://divinestay-b4eee.firebaseapp.com/")}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={PersoList} alt="appli" className={classes.img}
                        onClick={() => window.open("https://newpersolist.firebaseapp.com/")}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;
