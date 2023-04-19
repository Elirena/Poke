import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIUrl } from './API';

export const typeAPI = createApi({
  reducerPath: 'typeAPI',
  tagTypes: ['Types'],
  baseQuery: fetchBaseQuery({ baseUrl: APIUrl }),
  endpoints: build => ({
    fetchAllTypes: build.query({
      query: () => ({
        url: `/type`,
      }),
      providesTags: result => ['Types'],
    }),
  }),
});
