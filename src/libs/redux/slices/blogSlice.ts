import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Blog } from '../types';
import { blogApi } from '@/libs/redux/api/blogsApi';

interface BlogsState {
  blogs: Blog[];
  filteredBlogs: Blog[];
  currentBlog: Blog | null;
}

const initialState: BlogsState = {
  blogs: [],
  filteredBlogs: [],
  currentBlog: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
      state.filteredBlogs = state.blogs; // update filteredBlogs
    },
    removeBlog: (state, action: PayloadAction<string>) => {
      state.blogs = state.blogs.filter(blog => blog._id !== action.payload);
      state.filteredBlogs = state.blogs; // update filteredBlogs
    },
    setCurrentBlog: (state, action: PayloadAction<Blog>) => {
      state.currentBlog = action.payload;
    },
    filterBlogs: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredBlogs = state.blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      blogApi.endpoints.getBlogs.matchFulfilled,
      (state, action: PayloadAction<Blog[]>) => {
        state.blogs = action.payload;
        state.filteredBlogs = action.payload; // show all blogs by default
      }
    );
    builder.addMatcher(
      blogApi.endpoints.getBlogById.matchFulfilled,
      (state, action: PayloadAction<Blog>) => {
        state.currentBlog = action.payload;
      }
    );
  },
});

export const { addBlog, removeBlog, setCurrentBlog, filterBlogs } = blogSlice.actions;

export default blogSlice.reducer;
