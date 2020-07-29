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
            link: 'https://Roman-js.github.io/ToDoList',
            title: 'ToDoList',
            info: `The App can Make More Than One List  
                Add New Tasks as Quickly as Possible
                Revise Your To-Do Lists Daily
                Put Tasks in Your To-Do List and Change their`
        },
        {
            url: {
                backgroundImage: `url(${cardsImg})`
            },
            title: 'Cards',
            link: 'https://roman-js.github.io/Cards4U/',
            info: `The App have authentication/authorization, restore password (use email approve),
             edit and delete information in DB, search, pages with own interface ability
              to create decks of cards and check yourself in the part
               ‘play’, cards are dropping random but cards with low coefficient fall more often`
        },
        {
            url: {
                backgroundImage: `url(${socialNetworkImg})`
            },
            title: 'Social Network',
            link: 'https://Roman-js.github.io/social_network',
            info: 'It was the first big project, it has a lot of functionality include api requests and work with async methods.' +
                " The project had been written on classes components, it's really good practice old technology"
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