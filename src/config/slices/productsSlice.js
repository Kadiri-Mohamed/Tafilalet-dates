// redux/slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Dattes majhoul', description: 'Dattes majhoul', image: '/images/datte-majhoul-01-jpg.jpg', prix: 120 },
    { id: 2, name: 'Dattes likan', description: 'Dattes majhoul', image: '/images/datte-majhoul-01-jpg.jpg', prix: 120 },
    { id: 3, name: 'Dattes majhoul', description: 'Dattes majhoul', image: '/images/datte-majhoul-01-jpg.jpg', prix: 150 },
    { id: 4, name: 'Dattes fagouss', description: 'Dattes majhoul', image: '/images/datte-majhoul-01-jpg.jpg', prix: 200 },
    { id: 5, name: 'Dattes test', description: 'Dattes majhoul', image: '/images/datte-majhoul-01-jpg.jpg', prix: 150 },
    { id: 6, name: 'Dattes fagouss', description: 'Dattes majhoul', image: '/images/tafilalet-dattes.png', prix: 130 },
    { id: 7, name: 'Dattes test', description: 'Dattes majhoul', image: '/images/dattes1.jpg', prix: 140 },
    { id: 8, name: 'Dattes hello', description: 'Dattes majhoul', image: '/images/dattes.png', prix: 130 },
    { id: 9, name: 'Dattes test', description: 'Dattes majhoul', image: '/images/datte-majhoul-01-jpg.jpg', prix: 100 },
    { id: 10, name: 'Dattes likan', description: 'Dattes majhoul', image: '/images/datte-majhoul-01-jpg.jpg', prix: 180 }
];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        deleteProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        editProduct: (state, action) => {
            return state.map(product => 
                product.id === action.payload.id ? action.payload : product
            );
        }
    }
});

export const { addProduct, deleteProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
