import { createSlice } from "@reduxjs/toolkit";

// this is used to create slice
// createslice output return in counterslice
const counterSlice = createSlice({
    name : 'counter',
    // predefined key for initial state
    initialState:{
        // initial state value either array or object becuse its immutable value doesnt chnge
        //dont want multiple data so array dont take
        count:0
    },
    reducers : {
        // its not a js fn
        // reducer fn always gives fst argument as state of this slice
        increment:(state)=>{
         state.count++
        },
        decrement : (state)=>{
             state.count-- //state.count=state.count-1this is the only method done in react , cant directly value assigned(state.count=1)
        },
        reset : (state)=>{
            // if we want to assign directly a constant value to a variable (state.count=0)
            // value is the type of the state return is object
          return{...state,count:0} //(state.count=0)
        },
        incrementByAmount : (state,actionByCounter)=>{
            state.count += actionByCounter.payload
        }
    }

})
// export action 
export const {increment,decrement,reset,incrementByAmount} =counterSlice.actions
export default counterSlice.reducer