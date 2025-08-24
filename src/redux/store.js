import { configureStore, createSlice } from '@reduxjs/toolkit';
import taskReducer from './taskSlice.js';

// Create a simple theme slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    tasks: taskReducer,
  },
});

export default store;