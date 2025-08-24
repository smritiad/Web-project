import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tasks: taskReducer,
  },
});