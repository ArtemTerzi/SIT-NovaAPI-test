import { getDeliveryStatus } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  parcel: {
    Number: null,
    Status: null,
    WarehouseSender: null,
    WarehouseRecipient: null,
    createdAt: null,
  },
  searchHistoryList: [],
  isRefreshing: false,
  error: null,
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState: initialState,
  reducers: {
    clearSearchHistory: {
      reducer(state) {
        state.searchHistoryList = [];
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDeliveryStatus.fulfilled, (state, { payload }) => {
        state.parcel = payload;
        state.searchHistoryList.push(payload);
        state.isRefreshing = false;
      })
      .addCase(getDeliveryStatus.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(getDeliveryStatus.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});

export const trackingReducer = trackingSlice.reducer;
export const { clearSearchHistory } = trackingSlice.actions;
