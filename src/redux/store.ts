// Import configureStore from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit";

// Import the individual reducer functions from their respective files
import dataReducer from "./dataSlice.js";

// Create the Redux store using configureStore
export const store = configureStore({
  // Combine the individual reducers into a root reducer using the 'reducer' property
  reducer: {
    data: dataReducer,
  },
});
