import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import colorThemeReducer from '../features/colorTheme';

export const store = configureStore({
  reducer: {
    // all our reducer
    user: userReducer,
    colorTheme: colorThemeReducer,
  },
});
