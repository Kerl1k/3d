import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userService";
import { fileApi } from "../services/fileService";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [fileApi.reducerPath]: fileApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware().concat([userApi.middleware, fileApi.middleware]),
  });
};

export default setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
