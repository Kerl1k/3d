import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const folderApi = createApi({
  reducerPath: "folderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/file",
  }),
  tagTypes: ["Folder"],
  endpoints: (build) => ({
    fetchGetOne: build.query<any, any>({
      query: (id) => ({
        url: "/" + id,
      }),
    }),
  }),
});
