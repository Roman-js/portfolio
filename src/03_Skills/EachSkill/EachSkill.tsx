import React from "react";
import style from './EachSkill.module.css'
import {GridList, GridListTile, IconButton} from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import InfoIcon from '@material-ui/icons/Info';

export type TypeOfSkill = {

    img: string,
    title: string,
    cols: number
}

type imgDataType = {
    imgData: TypeOfSkill[];
}

const EachSkill = (props: imgDataType) => {

    return (
        <div>
            <GridList cellHeight={222} cols={3} className={style.eachSkill}>

                {props.imgData.map(skill =>
                    <GridListTile key={skill.img} cols={skill.cols || 1}>

                        <img src={skill.img} alt={skill.title}/>
                        <GridListTileBar
                        title={skill.title}
                        actionIcon={
                            <IconButton aria-label={`info about ${skill.title}`} >
                                <InfoIcon/>
                            </IconButton>
                        }/>

                    </GridListTile>)}

            </GridList>
        </div>
    )
}

export default EachSkill;