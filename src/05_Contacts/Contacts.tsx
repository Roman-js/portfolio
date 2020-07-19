import React from "react";
import style from './Contacts.module.scss'
import {Button, Container, TextField} from "@material-ui/core";
import Title from "../07_Common/Title/Title";


const Contacts = () => {

    return (
        <div className={style.contacts}>
            <Container maxWidth={'md'} className={style.container}>
                <Title title='Contacts'/>
                <div className={style.insideContainer}>
                    <form className={style.form}>
                        <TextField placeholder='Name'/>
                        <TextField placeholder='Email'/>
                        <TextField placeholder='Your message'/>
                        <div><Button variant='contained' color='primary'>Send</Button></div>

                    </form>
                </div>
            </Container>
        </div>
    )

};

export default Contacts
