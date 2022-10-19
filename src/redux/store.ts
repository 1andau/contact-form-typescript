import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filters from './slice'; 

export const store = configureStore({
    reducer: {
        filters, 
    },    
  });
  

  export type RootState = ReturnType<typeof store.getState>;
  
  type AppDispatch = typeof store.dispatch;
  export const useAppDispatch = () => useDispatch<AppDispatch>();