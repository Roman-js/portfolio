import React from "react";
import style from './Header.module.scss'


const Link: any  = require('react-scroll').default;

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.menu}>
                <a className={style.link} >Main</a>
                <a className={style.link} href="#ToSkills">Skills</a>
                <a className={style.link} href="#ToProjects">Projects</a>
                <a className={style.link} href="#ToContacts">Contacts</a>
            </div>

        </div>
    )
};

export default Header;