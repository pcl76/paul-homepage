import {createSlice} from '@reduxjs/toolkit'


export const quoteSlice = createSlice({
    name: "quote",
    initialState: {
      quote: "",
      author: ""
    },
    reducers: (builder) => ({})
      
    }
  );
  
  export default quoteSlice.reducer;