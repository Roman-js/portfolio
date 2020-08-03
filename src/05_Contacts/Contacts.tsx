import React, {useState} from "react";
import style from './Contacts.module.scss'
import {Button, Container, TextField} from "@material-ui/core";
import Title from "../07_Common/Title/Title";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import axios from 'axios'

const Fade: any = require('react-reveal').default;

const styles = {
    primary: {
        borderBottomColor: 'black',
        /*color: 'green',*/
    },
    input: {
        color: "white"
    },
};
type initialStateType = {
    name: string,
    contacts: string,
    message: string,
    dis: boolean
}

const Contacts = (props: any) => {

    const {classes} = props;

    const [state, setState] = useState<initialStateType>({name: '', contacts: '', message: '', dis: false});

    const setName = (e: any) => {
        setState({...state, name: e.currentTarget.value});
        console.log(state)
    };
    const setEmail = (e: any) => {
        setState({...state, contacts: e.currentTarget.value});
    };
    const setMessage = (e: any) => {
        setState({...state, message: e.currentTarget.value});
    };
    const sendForm = () => {
        setState({...state, dis: true});
        axios.post('https://gmail-smtp.herokuapp.com/sendMessage', {...state})
            .then(res => {
                return res.status === 200 ? setState({...state, message: '', name: '', contacts: '', dis: false}) : null
            });
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
                            <TextField placeholder='Email or Phone Number'
                                       onChange={setEmail}
                                       value={state.contacts}
                                       className={classes.root}

                                       InputProps={{className: classes.input}}
                            />
                            <TextField placeholder='Your message'
                                       onChange={setMessage}
                                       value={state.message}
                                       className={classes.root}
                                       multiline
                                       rows={4}
                                       InputProps={{className: classes.input}}
                            />
                            <div className={style.button}>
                                <Button variant='contained'
                                        onClick={sendForm}
                                        style={{borderColor: 'white',  backgroundColor: 'black'}}
                                        disabled={state.dis}
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


