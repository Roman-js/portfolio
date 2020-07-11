import React from "react";
import style from './Title.module.css'

type OwnPropsType = {
    title: string
}

const Title = (props:OwnPropsType) => {

    return(
        <>
            <h2 className={style.title}>{props.title}</h2>
        </>
    )
};

export default Title
