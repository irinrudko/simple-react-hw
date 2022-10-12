const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingType): typeof initState => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingType => {
    return {
        type: 'SET-LOADING',
        isLoading
    } as const
} 

export type LoadingType = {
    type: 'SET-LOADING',
    isLoading: boolean
}

