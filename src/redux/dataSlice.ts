import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeData: (state, action) => {
      // Actualiza los datos con el valor proporcionado en el payload de la acción
      return action.payload;
    },
    changeWrittenResponse: (state, action) => {
      // Actualiza la respuesta escrita con el valor proporcionado en el payload de la acción
      state.questions.writtenResponse.response = action.payload;
    },
  },
});

export const { changeData, changeWrittenResponse } = dataSlice.actions;
export default dataSlice.reducer;