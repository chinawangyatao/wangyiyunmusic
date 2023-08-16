import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./modules/demo";
const store = configureStore({
  reducer: {
    counter: countSlice,
  },
});
// 获取模块的类型 ，并导出使用

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
export default store;
