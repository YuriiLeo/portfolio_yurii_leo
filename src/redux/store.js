import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { themaSlice } from "./thema/themaSlice";

export const store = configureStore({
  reducer: {
    thema: themaSlice.reducer,
  },
});

export const persistor = persistStore(store);
