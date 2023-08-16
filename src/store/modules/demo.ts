import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter", //模块名字
  initialState: {
    count: 100, //数据名
  },
  reducers: {
    changeCount(state, { payload }) {
      state.count = payload;
    },
  },
});

export const { changeCount } = countSlice.actions;
export default countSlice.reducer;
