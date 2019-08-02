//ACTION TYPES
const ADD_ROW = "ADD_ROW";
const REMOVE_ROW = "REMOVE_ROW";
const ADD_COLUMN = "ADD_COLUMN";
const REMOVE_COLUMN = "REMOVE_COLUMN";

// ACTION CREATOR;
export const addRow = () => {
    return {
        type : ADD_ROW
    }
}
export const removeRow = () => {
    return {
        type : REMOVE_ROW
    }
}
export const addColumn = () => {
    return {
        type : ADD_COLUMN
    }
}
export const removeColumn = () => {
    return {
        type : REMOVE_COLUMN
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case ADD_ROW:
            return state.push([]);
        case ADD_COLUMN:
            return state.map((item)=> item.push('cell'));
        case REMOVE_ROW:
            return state.pop();
        case REMOVE_COLUMN:
            return state.map((item)=> item.pop());
        default:
            return state;
    }
}