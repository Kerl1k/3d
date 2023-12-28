import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/user/",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchAllRegistration: build.query<any, any>({
      query: () => ({
        url: "/",
      }),
    }),
    fetchRegistration: build.mutation<any, any>({
      query: (user) => ({
        url: "registration",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    fetchLogin: build.mutation<any, any>({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
