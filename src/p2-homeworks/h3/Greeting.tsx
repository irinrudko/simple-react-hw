import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, onEnter } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div >
            <div className={s.item}>
                <input value={name} onChange={setNameCallback} onKeyPress={onEnter} className={`${inputClass} ${s.error} ${s.input}`} />
                <button onClick={addUser} className={s.button}>add</button>
                <span className={s.counter}>{totalUsers}</span>
            </div>
            <span className={`${s.error_message}`}>{error}</span>
        </div>
    )
}

export default Greeting
