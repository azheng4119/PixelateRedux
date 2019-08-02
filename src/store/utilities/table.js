//ACTION TYPES
const ADD_ROW = "ADD_ROW";
const REMOVE_ROW = "REMOVE_ROW";
const ADD_COLUMN = "ADD_COLUMN";
const REMOVE_COLUMN = "REMOVE_COLUMN";

// ACTION CREATOR;
const addRow = () => {
    return {
        type : ADD_ROW
    }
}
const removeRow = () => {
    return {
        type : REMOVE_ROW
    }
}
const addColumn = () => {
    return {
        type : ADD_COLUMN
    }
}
const removeColumn = () => {
    return {
        type : REMOVE_COLUMN
    }
}