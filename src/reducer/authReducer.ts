export interface Action {
    type: string;
    paylaod: any;
}

const isAuth = { logged: false }

export const authReducer = (state = isAuth, action: Action) => {
    switch (action.type) {
        case 'login':
            return {
                ...action.paylaod,
                logged: true,
            }

        case 'logout':
            return {
                isAuth,
            }

        default:
            return state;
    }
}