import { configureStore } from '@reduxjs/toolkit'
import appSlice from "./slices/appSlice";

export default configureStore({
  reducer: {
    app: appSlice,
  }
})