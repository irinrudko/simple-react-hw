import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    inputPressHandler: (e: any) => void
    error: string // need to fix any
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, inputPressHandler } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.correct // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={inputPressHandler} className={`${inputClass} ${s.green_input} ${s.error} ${s.correct}`} />
            <span className={`${s.error} ${s.correct}`}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
