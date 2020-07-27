import React, {useState} from "react";
import style from './Contacts.module.scss'
import {Button, Container, TextField} from "@material-ui/core";
import Title from "../07_Common/Title/Title";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import axios from 'axios'

const Fade: any = require('react-reveal').default;

 const instance = axios.create({
     baseURL: 'https://gmail-smtp.herokuapp.com/sendMessage'}
 );



const styles = {
    root: {
        background: "#green"
    },
    input: {
        color: "white"
    },

};
type initialStateType = {
    name: string,
    email: string,
    message: string
}

const Contacts = (props: any) => {

    const {classes} = props;

    const [state, setState] = useState<initialStateType>({name: '', email: '', message: ''});

    const setName = (e: any) => {
        setState({...state, name: e.currentTarget.value});
        console.log(state)
    };
    const setEmail = (e: any) => {
        setState({...state, email: e.currentTarget.value});
    };
    const setMessage = (e: any) => {
        setState({...state, message: e.currentTarget.value});
    };
    const sendForm = () =>{
      return axios.post('https://gmail-smtp.herokuapp.com/sendMessage', state)
    };


    return (
        <div className={style.contacts} id={'ToContacts'}>

            <Container maxWidth={'md'} className={style.container}>
                <Fade>
                    <Title title='Contacts'/>
                    <div className={style.insideContainer}>
                        <form className={style.form}>
                            <TextField placeholder='Name'
                                       onChange={setName}
                                value={state.name}
                                       className={classes.root}
                                       InputProps={{className: classes.input}}
                            />
                            <TextField placeholder='Email'
                                       onChange={setEmail}
                                       value={state.email}
                                       className={classes.root}
                                       InputProps={{className: classes.input}}
                            />
                            <TextField placeholder='Your message'
                                       onChange={setMessage}
                                       value={state.message}
                                       className={classes.root}
                                       InputProps={{className: classes.input}}
                            />
                            <div className={style.button}>
                                <Button variant='outlined'
                                        onClick={sendForm}
                                        color='primary'>Send</Button>
                            </div>

                        </form>
                    </div>
                </Fade>
            </Container>

        </div>
    )

};

Contacts.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contacts);


