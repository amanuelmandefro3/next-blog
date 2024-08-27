'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/libs/redux/store';
import { useGetBlogsQuery } from '@/libs/redux/api/blogsApi';
import { filterBlogs } from '@/libs/redux/slices/blogSlice';
import BlogItem from '@/app/components/BlogItem';
import Link from 'next/link';
import {Blog} from '@/libs/redux/types';

const BlogPage = () => {
  const dispatch = useDispatch();
  const { data: blogs, error, isLoading } = useGetBlogsQuery();
  const filteredBlogs = useSelector((state: RootState) => state.blogs.filteredBlogs);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch(filterBlogs(e.target.value));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <div className='grid grid-cols-2 xl:col-span-3 items-center'>
        <div className="col-span-1 font-semibold text-3xl mx-16">
          Blogs
        </div>
        <div className="col-span-1 flex items-center gap-8">
          <input 
            type="text" 
            className='border-2 border-gray-700 rounded-full w-96 h-16 px-8' 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="h-16 bg-blue-600 text-white border rounded-full w-48 mr-12">
            + New Blog
          </button>
        </div>
        <div className="hidden xl:col-span-1"></div>
      </div>
      <div className="mt-8 flex flex-col gap-4 justify-center items-center">
        {filteredBlogs?.map((blog: Blog) => (
          <Link key={blog._id} href={`/blogs/${blog._id}`} className='w-full flex items-center justify-center'> 
            <BlogItem blog={blog} />
          </Link >
        ))}
      </div>
    </>
  );
};

export default BlogPage;
