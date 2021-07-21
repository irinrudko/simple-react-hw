import React from 'react'
import { AffairType } from './HW2'
import style from './Affair.module.css';
import Affairs from './Affairs';


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityColor = style.evenSpace + ' ' + style[props.affair.priority]// set even space and priority color + передать классы в className

    return (
        <div className={style.cont}>

            <div className={style.task}>
                <span className={`${style.title} ${style.evenSpace}`}>{props.affair.name}</span>
                <span className={`${style.priority} ${priorityColor}`}>{props.affair.priority}</span>
                <button className={style.removeButton} onClick={deleteCallback}>X</button>
            </div>

        </div>
    )
}

export default Affair
function t(t: any) {
    throw new Error('Function not implemented.');
}

