import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
