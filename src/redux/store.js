import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { trackingReducer } from "./tracking/trackingSlice";

const trackingPersistConfig = {
  key: "tracking",
  storage,
  whitelist: ["searchHistoryList"],
};

export const store = configureStore({
  reducer: {
    tracking: persistReducer(trackingPersistConfig, trackingReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
