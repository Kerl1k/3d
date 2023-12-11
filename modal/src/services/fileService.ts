import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFile } from "../ts/IFile";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/project",
  }),
  tagTypes: ["File"],
  endpoints: (build) => ({
    fetchCreateFile: build.mutation<any, any>({
      query: (folder) => ({
        url: "",
        method: "POST",
        body: folder,
      }),

      invalidatesTags: ["File"],
    }),
    fetchGetOneFile: build.query<IFile, number>({
      query: (id) => ({
        url: "/" + id,
      }),

      providesTags: ["File"],
    }),
    fetchGetAllFile: build.query<IFile, string>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["File"],
    }),
    fetchChangeFile: build.mutation<IFile, object>({
      query: (folder) => ({
        url: "/" + { folder },
        method: "POST",
        body: folder,
      }),
      invalidatesTags: ["File"],
    }),
  }),
});
