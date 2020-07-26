import React from "react";
import {Container, MuiThemeProvider} from "@material-ui/core";
import style from './Projects.module.scss'
import Title from "../07_Common/Title/Title";
import EachProject from "./EachProject/EachProject";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green, red} from "@material-ui/core/colors";
import toDoListImg from './../07_Common/images/todo.jpg'
import socialNetworkImg from './../07_Common/images/social_network1.jpeg'
import cardsImg from './../07_Common/images/cards.jpg'


const Projects = () => {

    const images = [
        {
            url: {
                backgroundImage: `url(${toDoListImg})`
            },
            title: 'ToDoList',
        },
        {
            url: {
                backgroundImage: `url(${cardsImg})`
            },
            title: 'Cards',
        },
        {
            url: {
                backgroundImage: `url(${socialNetworkImg})`
            },
            title: 'Social Network',
        },

    ];



    return (
        <div className={style.projects} id={'ToProjects'}>

            <Container maxWidth='md'>
                <Title title='My Works'/>

                    <EachProject images={images}/>

            </Container>

        </div>
    )
};

export default Projects