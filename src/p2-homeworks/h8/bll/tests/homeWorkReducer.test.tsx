import React from 'react'
import { UserType } from '../../HW8'
import { homeWorkReducer } from '../homeWorkReducer'

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        { _id: 0, name: 'Кот', age: 3 },
        { _id: 1, name: 'Александр', age: 66 },
        { _id: 2, name: 'Коля', age: 16 },
        { _id: 3, name: 'Виктор', age: 44 },
        { _id: 4, name: 'Дмитрий', age: 40 },
        { _id: 5, name: 'Ирина', age: 55 },
    ]
})

it('should sort name up', () => {
    const newState = homeWorkReducer(initialState, { type: 'sort', payload: 'up' })

    expect(newState[0]._id).toBe(1)
    expect(newState[5]._id).toBe(0)

    console.log(newState)
    // expect(...).toBe(...)
})
it('should sort name down', () => {
    const newState = homeWorkReducer(initialState, { type: 'sort', payload: 'down' })

    expect(newState[0]._id).toBe(0)
    expect(newState[5]._id).toBe(1)

})
it('should check the age is 18+', () => {
    const newState = homeWorkReducer(initialState, { type: 'check', payload: 18 })

    expect(newState.length).toBe(4)
})
