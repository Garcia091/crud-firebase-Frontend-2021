import { types } from "../types/types";

const initialState = {
    card: [],
    active: null
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cardAddNew:
            return {
                ...state,
                card: [action.payload, ...state.card]
            }
     
        default:
            return state;
    }
}
