const accounting = (bagOfMoney = 100, action) => {
    switch(action.type){
        case 'CREATE_CLAIM':
            return bagOfMoney - action.payload.amountOfMoneyToCollect
        case 'CREATE_POLICY':
            return bagOfMoney + action.payload.amount;
        default: 
            return bagOfMoney
    }
}

export default accounting