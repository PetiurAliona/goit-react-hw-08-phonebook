import { configureStore } from "@reduxjs/toolkit"
import contactsReducer from "./contacts/contacts-reducer"

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

import { authReducer } from "./auth/auth-reducer"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
