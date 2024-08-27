import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 
import { Blog } from '../types';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api' }),
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => '/blogs',
    }),
    getBlogById: builder.query<Blog, string>({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogByIdQuery } = blogApi;
