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
                        <a href='https://github.com/Roman-js' style={{color: 'black'}}>
                            <GitHubIcon className={style.icons}/>
                        </a>
                        <a href='https://www.facebook.com/roman.dmytrenko.3/' style={{color: 'black'}}>
                            <FacebookIcon className={style.icons}/>
                        </a>
                        <a href='https://t.me/Roman_kuz' style={{color: 'black'}}>
                            <TelegramIcon className={style.icons}/>
                        </a>
                        <a href='https://linkedin.com/in/roman-dmytrenko-381261143' style={{color: 'black'}}>
                            <LinkedInIcon className={style.icons}/>
                        </a>
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