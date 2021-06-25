import React from 'react'
import style from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt="avatar" className={style.avatar} />

            <div className={style.angle} />

            <div className={style.item}>
                <div className={style.text}>{props.name}</div>
                <div className={style.text}> {props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div >
    )
}

export default Message
