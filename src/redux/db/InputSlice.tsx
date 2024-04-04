import { createSlice } from '@reduxjs/toolkit';
import { FormValues } from '../../form/MainPage';

const initialState: FormValues =  {
  name: "",
  email: "",
  phone: 0, 
  linkSocialMedia: "",
  companyName: "",
  recipient: "",
  cities: "Выберите город*", 
  sources: "Откуда узнали про нас?",
}

export const DataSliceState = createSlice({
  name: 'database',
  initialState,

  reducers: {
      setData: (state, action) => action.payload,
            
  }, 
});

export const {  setData } = DataSliceState.actions

export default DataSliceState.reducer;

