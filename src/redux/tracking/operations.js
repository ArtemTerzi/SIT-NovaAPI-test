import { createAsyncThunk } from "@reduxjs/toolkit";
import { getParcelById } from "services/fetchService";

export const getDeliveryStatus = createAsyncThunk(
  "tracking/getDeliveryStatus",
  async (body, thunkAPI) => {
    try {
      return await getParcelById(body);
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
