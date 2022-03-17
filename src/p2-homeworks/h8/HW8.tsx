import React, { useState } from 'react'
import { homeWorkReducer } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h8/HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} >
            <div className={s.item}>
                <h4>{p.name}</h4>
                <span>{p.age}</span>
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }))

    return (
        <div>
            <hr />
            homework 8

            {/*should work (должно работать)*/}
            <div className={s.container} >

                <div className={s.box}>
                    <div >
                        {finalPeople}
                    </div>
                </div>
                <div className={s.buttons}>

                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div>sort down</div>
                    check 18
                </div>
            </div>


            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr />
        </div>
    )
}

export default HW8
