import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIUrl } from './API';

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  tagTypes: ['Cards'],
  baseQuery: fetchBaseQuery({ baseUrl: APIUrl }),
  endpoints: build => ({
    fetchAllCards: build.query({
      query: ({ limit, offset }: { limit: number; offset: number }) => ({
        url: `/pokemon`,
        params: { limit, offset },
      }),
      providesTags: result => ['Cards'],
    }),
    fetchCard: build.query({
      query: (name: string) => ({
        url: `/pokemon/${name}`,
        params: { name },
      }),
    }),
  }),
});
