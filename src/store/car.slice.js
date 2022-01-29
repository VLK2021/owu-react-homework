import {createSlice} from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },

        dellCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, dellCar} = carSlice.actions;
export default carReducer;

