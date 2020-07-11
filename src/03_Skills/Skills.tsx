import React from "react";
import style from './Skills.module.css'
import {Container} from "@material-ui/core";
import EachSkill from "./EachSkill/EachSkill";
import react from "./../07_Common/images/react.png"
import html from "./../07_Common/images/html.jpg"
import css from "./../07_Common/images/css4.png"
import js from "./../07_Common/images/js.jpeg"
import reduxImg from "./../07_Common/images/redux.jpg"
import git from "./../07_Common/images/git.gif"
import restapi from "./../07_Common/images/restapi.png"
import typescript from "./../07_Common/images/typescript.jpeg"
import Title from "../07_Common/Title/Title";


const Skills = () => {

    const imgData = [
        {img: js, title: 'JS', cols: 2},
        {img: html, title: 'HTML', cols: 1},
        {img: react, title: 'React', cols: 3},
        {img: git, title: 'git', cols: 1},
        {img: restapi, title: 'RestApi', cols: 1},
        {img: typescript, title: 'Typescript', cols: 1},
        {img: css, title: 'CSS', cols: 1},
        {img: reduxImg, title: 'Redux', cols: 2},

        /*{img: './../07_Common/images/...', title: 'React', cols: 2}*/
    ];

    return (
        <div className={style.skills}>
            <Container maxWidth='md'>
                <Title title='Skills'/>
            <EachSkill imgData={imgData}/>
            </Container>
        </div>
    )
}

export default Skills;