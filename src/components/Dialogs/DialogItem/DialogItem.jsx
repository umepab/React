import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.dialogs} src= 'https://files.adme.ru/files/news/part_165/1658265/8882015-41015410-1-0-1514194714-1514194724-1500-1-1514194724-650-4561b7ccf5-1514279441.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



export default DialogItem