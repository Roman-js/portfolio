import React from "react";
import style from './Main.module.scss'
import {Container} from "@material-ui/core";


const Main = () => {

    return (

        <div className={style.main}>
            <Container maxWidth='md'>
            <div className={style.presentation}>


                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I'm Dmytrenko Roman</h1>
                    <p> FrontEnd Developer</p>
                </div>
                <div className={style.photo}></div>


            </div>
            </Container>
        </div>

    )
}

export default Main;