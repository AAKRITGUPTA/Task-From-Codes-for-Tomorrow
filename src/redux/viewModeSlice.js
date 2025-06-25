import { createSlice } from "@reduxjs/toolkit";

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState: "row",
  reducers: {
    toggleViewMode: (state) => (state === "row" ? "column" : "row"),
    setViewMode: (state, action) => action.payload,
  },
});

export const { toggleViewMode, setViewMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;