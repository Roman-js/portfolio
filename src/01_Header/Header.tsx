import React from "react";
import style from './Header.module.scss'



const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.menu}>
                <a href="javascript:void(0)">Main</a>
                <a href="javascript:void(0)">Skills</a>
                <a href="javascript:void(0)">Projects</a>
                <a href="javascript:void(0)">Contacts</a>
            </div>

        </div>
    )
}

export default Header;