import { createSlice } from "@reduxjs/toolkit"

const modalPreviewSlice = createSlice({
  name: 'modalPreview',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setModalPreview: (state, action) => {
      state.isOpen = action.payload
    }
  }
})

export const { setModalPreview } = modalPreviewSlice.actions
export const modalPreviewReducer = modalPreviewSlice.reducer
