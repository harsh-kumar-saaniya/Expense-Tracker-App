import { act } from "react-dom/test-utils";

export default (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload, ...state]
            }
        default:
            return state;

    };
};