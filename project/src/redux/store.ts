import { configureStore } from "@reduxjs/toolkit";
import { cakesReducer } from "./cakesSlice";
import { modalPreviewReducer } from "./modalPreviewSlice"
import { fillingsReducer } from "./fillingsSlice"

export const store = configureStore({
  reducer: {
    cakes: cakesReducer,
    modalPreview: modalPreviewReducer,
    fillings: fillingsReducer
  }
})
