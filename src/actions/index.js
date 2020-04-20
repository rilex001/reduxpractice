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



