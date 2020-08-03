import React, {ChangeEvent, useState} from "react";
import style from './EachProject.module.scss'
import {Button} from "@material-ui/core";

const Fade: any = require('react-reveal').default;

type image = {
    url: object
    title: string
    info: string
    link: string
}
type OwnPropsType = {
    images: image[]
}


const EachProject = (props: OwnPropsType) => {

    return (

        <div className={style.wrapperAProject}>
            {props.images.map(img =>
                <Fade left key={img.title}>
                    <a href={img.link}>
                        <div className={style.image} style={img.url}>

                            <div className={style.info}>

                                <span>
                                    <h3>{img.title}</h3>
                                    {img.info}
                                </span>

                            </div>

                        </div>
                    </a>
                </Fade>
            )}
        </div>
    )
};

export default EachProject