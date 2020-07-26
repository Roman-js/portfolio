import React, {ChangeEvent, useState} from "react";
import style from './EachProject.module.scss'
import {Button} from "@material-ui/core";

const Fade: any = require('react-reveal').default;

type image = {
    url: object
    title: string,
}
type OwnPropsType = {
    images: image[]
}





const EachProject = (props: OwnPropsType) => {



    return (

        <div className={style.wrapperAProject}>
            {props.images.map(img =>
                <Fade left>
                <div className={style.image} style={img.url} >
                        <div className={style.description} >

                                <Fade bottom>

                                </Fade>


                        </div>
                    <Button variant="contained" color="inherit" className={style.but}>
                        {img.title}
                    </Button>

                </div>
                </Fade>

            )}
        </div>
    )
};

export default EachProject