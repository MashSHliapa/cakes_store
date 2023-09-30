import { configureStore } from "@reduxjs/toolkit";
import { cakesReducer } from "./cakesSlice";
import { modalPreviewReducer } from "./modalPreviewSlice";

export const store = configureStore({
  reducer: {
    cakes: cakesReducer,
    modalPreview: modalPreviewReducer,
  }
})
