import { SliceState, CitiesEnum, Cities, SourcesEnum, Sourses } from "../form/HiddenBlock/selectOptions";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SliceState = {
    sourses: {
        name: 'Откуда узнали про нас', 
        soursesProperty: SourcesEnum.Friends,
    },

    cities: {
        name: 'Выберите город*',
        citiesProperty: CitiesEnum.Moskow,      
    },
}

const filterSlice = createSlice({
name: 'filters', 
initialState, 
reducers: {

    setCities(state, action: PayloadAction<Cities>){
        state.cities = action.payload; 
        console.log(setCities);
        
    }, 
    setSourses(state, action: PayloadAction<Sourses>){
        state.sourses = action.payload;   
        console.log(setSourses);
     }
}
})

export const { setCities, setSourses } = filterSlice.actions;
export default filterSlice.reducer;