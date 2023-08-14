import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
};

const UploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = UploadSlice.actions;

export default UploadSlice.reducer;
