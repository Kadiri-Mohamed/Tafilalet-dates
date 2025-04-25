// redux/slices/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'admin', email: 'admin@gmail.com', password: '123456789', role: 'admin' },
    { id: 2, name: 'kadiri', email: 'kadiri@gmail.com', password: '123456789', role: 'user' },
    { id: 3, name: 'test', email: 'test' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Define user-related reducers here (addUser, editUser, deleteUser, etc.)
    }
});

export default usersSlice.reducer;
