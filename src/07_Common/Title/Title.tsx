import React from "react";
import style from './Title.module.scss'

type OwnPropsType = {
    title: string
}

const Flip: any = require('react-reveal').default;

const Title = (props:OwnPropsType) => {

    return(
        <div className={style.title}>
            <Flip bottom>
            <h2>{props.title}</h2>
            </Flip>
        </div>
    )
};

export default Title
