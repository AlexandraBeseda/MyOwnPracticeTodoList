export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            debugger
            return {...state, error: action.error}
        default:
            return state
    }
}

type ActionsType = SetAppStatusActionType | SetAppErrorActionType;

export const setAppStatusAC = (status: RequestStatusType) => ({
    type: "APP/SET_STATUS", status
} as const);

export const setAppErrorAC = (error: string | null) => ({
    type: 'APP/SET-ERROR', error
} as const);
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
