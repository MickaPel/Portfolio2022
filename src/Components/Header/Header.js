import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import "./style.css";

import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Github from '../Images/github1.png';
import Email from '../Images/mail3.png';
import Logo from '../Images/LogoMP.png';
import Linkedin3 from '../Images/Linkedin7.png';


const useStyles = makeStyles({
    root: {
        height: 55,
        margin:'auto',
        transition: "background-color 1s",
        "&:hover": {
            backgroundColor: "#282b30" 
        }
    },
    drawer: {
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            background: '#282b30',
            color: "#f2d974",
        },
    },
    img: {
        height: "2.2vw",
        width: "2.2vw",
        marginTop: 10,
        marginBottom: 10,
        transition: "transform .3s, color 1s",
        "&:hover": {
            transform: "scale(1.3)",
            color: "#F0A500",
        }
    },
    img2: {
        height: "25px",
        width: "25px",
        marginTop: 10,
        marginBottom: 10,
        transition: "transform .3s, color 1s",
        "&:hover": {
            transform: "scale(1.3)",
            color: "#F0A500",
        }
    },
    logo: {
        height: "55px",
        width: '55px',
        transition: "transform .9s",
        "&:hover": {
            transformOrigin: "0 0",
            transform: "scale(1.8, 1.8)",
        }
    },
    typography: {
        textDecoration: 'none',
        color: '#B2B1B9',
        transition: "color 1s",
        "&:hover": {
            color: "#F0A500",
        }
    },
    typography2: {
        textDecoration: 'none',
        color: '#B2B1B9',
        fontSize: 12,
        transition: "color 1s",
        "&:hover": {
            color: "#F0A500",
        }
    },
});

const Item = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent: "space-around"
}));

function Header() {

    const classes = useStyles();

    //responsive design
    const matches = useMediaQuery('(min-width:600px)');

    //Drawer
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            {matches ?
                <Box sx={{ flexGrow: 1, paddingTop: 1 }}>
                    <Grid container spacing={1}>
                        <Grid container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center" xs={2}
                            item={true}>
                                <img 
                                    src={Logo} 
                                    alt="logo"
                                    className="Logo"
                                />
                        </Grid>
                        <Grid 
                            xs={8} 
                            item={true}
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center">
                            <Item variant="h6" gutterBottom component="a" href="#Portfolio" className={classes.typography}>
                                Portfolio          
                            </Item>
                            <Item variant="h6" gutterBottom component="a" href="#Technologies" className={classes.typography}>
                                Technologies          
                            </Item>
                            <Item variant="h6" gutterBottom component="a" href="#Contact" className={classes.typography}>
                                Contact          
                            </Item>
                        </Grid>
                        <Grid 
                            xs={2}
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            item={true}>
                            <img 
                                src={Github} 
                                alt="github" 
                                onClick={() => window.open("https://github.com/Mitch-Aries")}
                                className={classes.img}
                                />
                            <img 
                                src={Linkedin3} 
                                alt="linkedin" 
                                onClick={() => window.open("https://www.linkedin.com/in/mykhaylo-pelykh-55587017b/")}
                                className={classes.img}/>
                            <img 
                                src={Email} 
                                alt="mail"
                                onClick={() => window.open('mailto:mykhaylopelykh@gmail.com')}
                                className={classes.img}/>
                        </Grid>
                    </Grid>
                </Box>

                :

                <Box sx={{ flexGrow: 1, paddingTop: 1 }}>
                <Grid container spacing={1}>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        xs={2}
                        item={true}>
                            <img 
                                src={Logo} 
                                alt="logo"
                                className="Logo"
                            />
                    </Grid>
                        <Grid 
                            xs={8} 
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            item={true}>
                            <a href="#Portfolio" className={classes.typography2}>
                                Portfolio          
                            </a>
                            <a href="#Technologies" className={classes.typography2}>
                                Technologies          
                            </a>
                            <a href="#Contact" className={classes.typography2}>
                                Contact          
                            </a>
                    </Grid>
                    <Grid 
                        xs={2}
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        item={true}>
                        <ClickAwayListener onClickAway={handleDrawerClose}>
                            <IconButton 
                                edge="start"  
                                color="inherit" 
                                aria-label="open drawer" 
                                onClick={handleDrawerOpen}
                                >
                                <MenuIcon style={{fill: "#ffcd3c"}}/>
                            </IconButton>
                        </ClickAwayListener>
                            <Drawer
                                className={classes.drawer}
                                variant="persistent"
                                anchor="right"
                                open={open}
                            >
                                <List>
                                    <Grid container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{minWidth: 80}}>
                                            <IconButton   
                                                color="inherit" 
                                                aria-label="open drawer" 
                                                onClick={handleDrawerOpen}
                                                >
                                                <CloseIcon style={{fill: "#ffcd3c"}}/>
                                            </IconButton>
                                                <img 
                                                    src={Github} 
                                                    alt="github" 
                                                    onClick={() => window.open("https://github.com/Mitch-Aries")}
                                                    className={classes.img2}/>
                                                <img 
                                                    src={Linkedin3} 
                                                    alt="linkedin" 
                                                    onClick={() => window.open("https://www.linkedin.com/in/mykhaylo-pelykh-55587017b/")}
                                                    className={classes.img2}/>
                                                <img 
                                                    src={Email} 
                                                    alt="mail"
                                                    onClick={() => window.open('mailto:mykhaylopelykh@gmail.com')}
                                                    className={classes.img2}/>
                                    </Grid>
                                </List>
                            </Drawer>
                        </Grid>
                    </Grid>
                </Box>
            }
        </div>
    )
}

export default Header;
