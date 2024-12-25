import { ADD_PRODUCT, DELETE_PRODUCT } from "./Actionstype"

const addproduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const deleteproduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

export { addproduct, deleteproduct }