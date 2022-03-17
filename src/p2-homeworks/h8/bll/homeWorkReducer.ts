import { UserType } from "../HW8"

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => (a.name >= b.name) ? 1 : -1)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => (a.name >= b.name) ? -1 : 1)]
            }

            return [...state];
        }
        case 'check':
            return [
                ...state.filter(u => (u.age >= 18) ? u : null)
            ]
        default: return state
    }
}

export const sortUpAC = () => {
    return {
        type: 'sort', payload: 'up'
    } as const
}
export const sortDownAC = () => {
    return {
        type: 'sort', payload: 'down'
    } as const
}
export const checkUserAgeAC = (value: number) => {
    return {
        type: 'check', payload: value
    } as const
}

export type ActionTypes = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof checkUserAgeAC>