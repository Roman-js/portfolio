import React from "react";
import style from './Footer.module.scss'
import {Container} from "@material-ui/core";

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import Title from "../07_Common/Title/Title";

const Fade: any = require('react-reveal').default;


const Footer = () => {

    return (
        <div className={style.footer}>
            <Fade bottom>
            <Container maxWidth={'md'}>

                <header><Title title={'Roman Dmytrenko'}/></header>
                <div className={style.iconsContainer}>
                    <GitHubIcon className={style.icons}/>
                    <FacebookIcon className={style.icons}/>
                    <TelegramIcon className={style.icons}/>
                    <LinkedInIcon className={style.icons}/>
                </div>

            </Container>
            <div className={style.copyRights}>
                © 2020 Все права защищены
            </div>
        </Fade>
        </div>
    )
};

export default Footer