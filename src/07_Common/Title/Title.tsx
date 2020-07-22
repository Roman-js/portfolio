import React from "react";
import style from './Title.module.scss'

type OwnPropsType = {
    title: string
}

const Title = (props:OwnPropsType) => {

    return(
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
};

export default Title
