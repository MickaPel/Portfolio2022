import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#da9833"),
    backgroundColor: "#da9833",
    '&:hover': {
        backgroundColor: "#c47802",
    },
}));

export default function Contact() {

    const matches = useMediaQuery('(min-width:600px)');

    const inputStyle = {
        width: "80%",
        marginTop: 3,
        fontSize: 16,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black"
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#da9833"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#da9833"
            },
            "& .MuiOutlinedInput-input": {
                color: "#da9833"
            },
            "&:hover .MuiOutlinedInput-input": {
                color: "#da9833"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#da9833"
            },
            "& .MuiInputLabel-outlined": {
                color: "da9833"
            },
            "&:hover .MuiInputLabel-outlined": {
                color: "#da9833"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#da9833"
            }
    };

    const form = useRef();

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        event.target.name==="name" 
        ? setName(event.target.value)
        : event.target.name==="company" 
        ? setCompany(event.target.value)
        : event.target.name==="phone" 
        ? setPhone(event.target.value)
        : event.target.name==="email" 
        ? setEmail(event.target.value)
        : event.target.name==="message" 
        ? setMessage(event.target.value)
        : console.log("error")
    };

    const divMessage = document.getElementById("message"); 

    const sendMessageSucces = () => {
        divMessage.style.color = '#da9833';
        divMessage.innerHTML = `<p>
                                    Your message has been sent successfuly.
                                </p>`
        setTimeout(() => {
            divMessage.innerHTML = "";
        }, 3000);
    };
    const sendMessageError = (err) => {
        divMessage.style.color = 'red';
        divMessage.innerHTML = `<p>
                                    Une erreur s'est produite: ${err}
                                </p>`
        setTimeout(() => {
            divMessage.innerHTML = "";
        }, 3000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3uogy2g', 'template_8oqehth', form.current, 'user_kkiVCtLUFgzs0KA68U62O')
        .then((result) => {
            console.log(result.text);
            setName("");
            setCompany("");
            setPhone("");
            setEmail("");
            setMessage("");
            sendMessageSucces();
        }, (error) => {
            console.log(error.text);
            sendMessageError();
        });
    };

    return (
        <div style={{width: matches ? 590 : "90%", marginBottom: 40, marginTop: 150}}>
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={6}>
                    <span 
                        className="ContactTitle"
                        >Contact</span>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>

            <Card sx={{backgroundColor: "#5B5B5B", marginTop: matches ? 15 : 8, boxShadow: "black 0px 5px 15px"}}>
                <form ref={form} onSubmit={sendEmail}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <TextField sx={inputStyle} 
                                        id="outlined-basic" 
                                        label="Name" 
                                        variant="outlined" 
                                        type="text" 
                                        name="name"
                                        required={true}
                                        onChange={(e) => handleChange(e)}
                                        value={name}/>
                            <TextField sx={inputStyle} 
                                        id="outlined-basic" 
                                        label="Company" 
                                        variant="outlined" 
                                        type="text" 
                                        name="company"
                                        onChange={(e) => handleChange(e)}
                                        value={company}/>
                            <TextField sx={inputStyle} 
                                        id="outlined-basic" 
                                        label="Phone" 
                                        variant="outlined" 
                                        type="text" 
                                        name="phone"
                                        onChange={(e) => handleChange(e)}
                                        value={phone}/>
                            <TextField sx={inputStyle} 
                                        id="outlined-basic" 
                                        label="E-mail" 
                                        variant="outlined" 
                                        type="email" 
                                        name="email"
                                        required={true}
                                        onChange={(e) => handleChange(e)}
                                        value={email}/>
                            <TextField sx={inputStyle}
                                        id="outlined-multiline-static"
                                        label="Your message"
                                        multiline
                                        rows={10}
                                        name="message"
                                        required={true}
                                        onChange={(e) => handleChange(e)}
                                        value={message}/>
                        </Grid>
                    <ColorButton 
                        size="large" 
                        variant="contained"
                        sx={{margin: "auto",
                            marginTop: 5,
                            marginBottom: 5,
                            }} 
                        type="submit"
                        >Send
                    </ColorButton>
                    <div id="message"></div>
                </form>
            </Card>
        </div>
    );
};
