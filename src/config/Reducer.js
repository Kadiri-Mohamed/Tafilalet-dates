import { ADD_PRODUCT, DELETE_PRODUCT } from "./Actionstype"

const intialState = {
    products: [
        {
            id: 1,
            name: 'Dattes majhoul',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 120,
        },
        {
            id: 4,
            name: 'Dattes likan',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 120,
        },
        {
            id: 5,
            name: 'Dattes majhoul',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 150,
        },
        {
            id: 6,
            name: 'Dattes fagouss',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 200,
        },
        {
            id: 7,
            name: 'Dattes test',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 150,
        },{
            id: 2,
            name: 'Dattes fagouss',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 130,
        },
        {
            id: 3,
            name: 'Dattes test',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 140,
        },
        {
            id: 11,
            name: 'Dattes test',
            description: 'Dattes majhoul',
            image: '/images/datte1.jpg',
            prix: 130,
        },
        {
            id: 12,
            name: 'Dattes test',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 100,
        },
        {
            id: 8,
            name: 'Dattes likan',
            description: 'Dattes majhoul',
            image: '/images/datte-majhoul-01-jpg.jpg',
            prix: 180,
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