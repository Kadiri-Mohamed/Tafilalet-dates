import { ADD_PRODUCT, DELETE_PRODUCT } from "./Actionstype"

const intialState = {
    products: [
        {
            id: 1,
            name: 'Dattes majhoul',
            description: 'Dattes majhoul',
            image: 'https://www.google.com/imgres?q=dattes%20maroc&imgurl=https%3A%2F%2Fwww.agrimaroc.ma%2Fwp-content%2Fuploads%2FMejhoul.jpg&imgrefurl=https%3A%2F%2Fwww.agrimaroc.ma%2Fsidattes-dattes-mejhoul-californie%2F&docid=KQAfMCCoGegOcM&tbnid=kXmsY1ljfAMZeM&vet=12ahUKEwiQ--a0l8GKAxXEQ6QEHfNWGbMQM3oECBgQAA..i&w=300&h=219&hcb=2&ved=2ahUKEwiQ--a0l8GKAxXEQ6QEHfNWGbMQM3oECBgQAA',
            prix: 1000,
        }
    ]
}
export const Reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case "EDIT_PRODUCT":
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product)
            }
        default:
            return state
        }
}