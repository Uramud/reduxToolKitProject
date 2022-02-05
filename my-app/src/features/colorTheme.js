import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '';

export const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
//exporting  action
export const { changeColor } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
