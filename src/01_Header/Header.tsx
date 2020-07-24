import React from "react";
import style from './Header.module.scss'


const {Link}: any = require('react-scroll').default;

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.menu}>
                <Link className={style.link}>Main</Link>
                <Link
                    activeClass={style.active}
                    to="ToSkills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    className={style.link}
                >Skills</Link>
                <Link activeClass={style.active}
                      to="ToProjects"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}
                      className={style.link}>Projects</Link>
                <Link activeClass={style.active}
                      to="ToContacts"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}
                      className={style.link}>Contacts</Link>
            </div>

        </div>
    )
};

export default Header;