export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
};
export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    }
};
export const changeUser = (name) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: name
    }
}
export const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfMoneyToCollect
        }
    }
}
export const createPolicy = name => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount: 20
        }
    }
}
export const deletePolicy = name => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
}



