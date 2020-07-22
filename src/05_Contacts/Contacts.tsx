import React from "react";
import style from './Contacts.module.scss'
import {Button, Container, TextField} from "@material-ui/core";
import Title from "../07_Common/Title/Title";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {green, purple, red} from "@material-ui/core/colors";


const styles = {
    root: {
        background: "#343a40"
    },
    input: {
        color: "white"
    },
    /*palette: {
        primary: purple,
        secondary: green,
        error: red,
    },*/
};

const Contacts = (props: any) => {

    const { classes } = props;


        return (
        <div className={style.contacts}>
            <Container maxWidth={'md'} className={style.container}>
                <Title title='Contacts'/>
                <div className={style.insideContainer}>
                    <form className={style.form}>
                        <TextField placeholder='Name'
                                   className={classes.root}
                                   InputProps={{className: classes.input}}
                        />
                        <TextField placeholder='Email'
                                   className={classes.root}
                                   InputProps={{className: classes.input}}
                        />
                        <TextField placeholder='Your message'
                                   className={classes.root}
                                   InputProps={{className: classes.input}}
                        />
                        <div className={style.button}>
                            <Button variant='outlined' color='primary'>Send</Button>
                        </div>

                    </form>
                </div>
            </Container>
        </div>
    )

};

Contacts.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contacts);


