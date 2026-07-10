import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'

// Create a Redux Store
export const store = configureStore({
    reducer: {
        // Add Slice Reducers to Store
        counter: counterReducer
    },
});

