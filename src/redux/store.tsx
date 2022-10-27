import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import database from './db/InputSlice';

export const store = configureStore({
    reducer:{
        database,
    }
})


export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
