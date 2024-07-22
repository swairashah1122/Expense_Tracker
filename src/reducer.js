// const transactionReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TRANSACTION':
//             return [action.payload, ...state];
//         case 'CLEAR_TRANSACTIONS':
//             return [];
//         default:
//             return state;
//     }
// }
// export default transactionReducer;




















const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [action.payload, ...state];
        case 'CLEAR_TRANSACTIONS':
            localStorage.removeItem('transactions');
            return [];
        default:
            return state;
    }
}
export default transactionReducer;
