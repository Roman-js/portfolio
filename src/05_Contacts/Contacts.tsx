import React from "react";
import style from './Contacts.module.scss'
import {Button, Container, TextField} from "@material-ui/core";
import Title from "../07_Common/Title/Title";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const Fade: any = require('react-reveal').default;



const styles = {
    root: {
        background: "#green"
    },
    input: {
        color: "white"
    },

};

const Contacts = (props: any) => {

    const { classes } = props;




        return (
        <div className={style.contacts} id={'ToContacts'}>

            <Container maxWidth={'md'} className={style.container}>
                <Fade>
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
                </Fade>
            </Container>

        </div>
    )

};

Contacts.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contacts);


