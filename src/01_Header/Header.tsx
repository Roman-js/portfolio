import React from "react";
import style from './Header.module.scss'



const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.menu}>
                <a className={style.link} href="javascript:void(0)">Main</a>
                <a className={style.link} href="javascript:void(0)">Skills</a>
                <a className={style.link} href="javascript:void(0)">Projects</a>
                <a className={style.link} href="javascript:void(0)">Contacts</a>
            </div>

        </div>
    )
}

export default Header;