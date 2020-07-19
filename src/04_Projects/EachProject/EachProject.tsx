import React from "react";
import style from './EachProject.module.scss'
import {Button} from "@material-ui/core";



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
                <div className={style.image} style={img.url}>
                    <Button variant="outlined" color="primary">
                        {img.title}
                    </Button>
                </div>
            )}
        </div>
    )
};

export default EachProject