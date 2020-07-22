import React from "react";
import style from './Main.module.scss'
import {Container} from "@material-ui/core";
import Particles from "react-tsparticles";



const Main = () => {



    return (

        <div className={style.main}>
            <Particles className={style.particles}
                       options={{
                           background: {
                               color: {
                                   value: "#343a40",
                               },
                           },
                           fpsLimit: 60,
                           interactivity: {
                               detectsOn: "canvas",
                               events: {
                                   onClick: {
                                       enable: true,
                                       mode: "push",
                                   },
                                   onHover: {
                                       enable: true,
                                       mode: "repulse",
                                   },
                                   resize: true,
                               },
                               modes: {
                                   bubble: {
                                       distance: 400,
                                       duration: 2,
                                       opacity: 0.8,
                                       size: 40,
                                   },
                                   push: {
                                       quantity: 4,
                                   },
                                   repulse: {
                                       distance: 200,
                                       duration: 0.4,
                                   },
                               },
                           },
                           particles: {
                               color: {
                                   value: "#ffffff",
                               },
                               links: {
                                   color: "#ffffff",
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.5,
                                   width: 1,
                               },
                               collisions: {
                                   enable: true,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outMode: "bounce",
                                   random: false,
                                   speed: 6,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       value_area: 800,
                                   },
                                   value: 80,
                               },
                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: "circle",
                               },
                               size: {
                                   random: true,
                                   value: 5,
                               },
                           },
                           detectRetina: true,
                       }}

            />
            <Container maxWidth='md'>
                <div className={style.presentation}>

                    <div className={style.text}>
                        <span>Hi there</span>
                        <h1 className={style.name}>I'm Dmytrenko Roman</h1>
                        <p> FrontEnd Developer</p>
                    </div>

                    <div className={style.photo}>
                        <div className={style.photoImage}>
                        </div>

                    </div>


                </div>
            </Container>
        </div>

    )
}

export default Main;