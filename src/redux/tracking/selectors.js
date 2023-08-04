export const selectParcel = (state) => state.tracking.parcel;

export const selectSearchHistoryList = (state) =>
  state.tracking.searchHistoryList;

export const selectError = (state) => state.tracking.error;

export const selectIsRefreshing = (state) => state.tracking.isRefreshing;
