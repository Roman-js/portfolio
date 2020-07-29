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
                <div className={style.image} style={img.url} >
                    <div className={style.info}>
                        <span>{img.info}</span>
                        <Button variant="contained"
                                color="primary"
                                style={{borderColor: 'green',  backgroundColor: 'green'}}
                                href={img.link}>
                            {img.title}
                        </Button>
                    </div>
                </div>
                </Fade>
            )}
        </div>
    )
};

export default EachProject