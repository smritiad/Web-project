import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    hasTasks: false,
  },
  reducers: {
    setHasTasks: (state, action) => {
      state.hasTasks = action.payload;
    },
  },
});

export const { setHasTasks } = taskSlice.actions;
export default taskSlice.reducer;