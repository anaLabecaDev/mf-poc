import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthRequest, AuthResponse } from './types';

const API_SERVER = 'http://localhost:9000';

export const api = createApi({
  reducerPath: 'mainAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_SERVER }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<AuthRequest, AuthResponse>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
      })
    })
  })
});
