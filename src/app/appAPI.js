import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const Method = {
  GET: "GET",
  POST: "POST"
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getUserRepo: builder.query({
      query: (payload) => ({
        url: payload + process.env.REACT_APP_R_ENDPOINT,
        method: Method.GET,
        headers: {
          Authorization: process.env.REACT_APP_TOKEN
        }
      })
    }),
  }),
})

export const { useGetUserRepoQuery } = api