import React from "react";
import style from './Header.module.css'



const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.menu}>
                <a href=''>Main</a>
                <a href=''>Skills</a>
                <a href=''>Projects</a>
                <a href=''>Contacts</a>
            </div>

        </div>
    )
}

export default Header;