import React from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import style from './Affairs.module.css';


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Function // need to fix
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { console.log('has been clicked') } // need to fix
    const setHigh = () => { }
    const setMiddle = () => { }
    const setLow = () => { }

    return (
        <div className={style.container}>

            {mappedAffairs}

            <div className={style.buttonContainer}>
                <button onClick={setAll} className={style.button}>All</button>
                <button onClick={setHigh} className={style.button}>High</button>
                <button onClick={setMiddle} className={style.button}>Middle</button>
                <button onClick={setLow} className={style.button}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
