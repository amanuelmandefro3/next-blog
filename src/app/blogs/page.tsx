'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/libs/redux/store';
import { useGetBlogsQuery } from '@/libs/redux/api/blogsApi';
import { filterBlogs } from '@/libs/redux/slices/blogSlice';
import BlogItem from '@/app/components/BlogItem';
import Link from 'next/link';
import {Blog} from '@/libs/redux/types';
const relatedBlogs = [
  {
    "_id": "64dfe79d50961c55ce93e7e4",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
    "title": "Mastering the Art of Code Refactoring",
    "description": "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    "author": null,
    "isPending": true,
    "tags": [
      "Programming",
      "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [],
    "createdAt": "2023-08-18T21:50:21.755Z",
    "updatedAt": "2023-08-18T21:50:21.755Z",
    "__v": 0
  },
  {
    "_id": "64dfe81250961c55ce93e7ed",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395536/A2sv/zt8efjgvtxiripl0d961.jpg",
    "title": "Mastering the Art of Code Refactoring 2",
    "description": "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    "author": null,
    "isPending": true,
    "tags": [
      "Programming",
      "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [],
    "createdAt": "2023-08-18T21:52:18.561Z",
    "updatedAt": "2023-08-18T21:52:18.561Z",
    "__v": 0
  },
  {
    "_id": "64dfe96a50d83607285ffa08",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395881/A2sv/fvpmjksrplpxgqkgxlj3.jpg",
    "title": "Mastering the Art of Code Refactoring 2",
    "description": "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    "author": null,
    "isPending": true,
    "tags": [
      "Programming",
      "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [
      "Web Development",
      "Mobile"
    ],
    "createdAt": "2023-08-18T21:58:02.754Z",
    "updatedAt": "2023-08-18T21:58:02.754Z",
    "__v": 0
  },
];


const BlogPage = () => {
  // const dispatch = useDispatch();
  // const { data: blogs, error, isLoading } = useGetBlogsQuery();
  // const filteredBlogs = useSelector((state: RootState) => state.blogs.filteredBlogs);
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  //   dispatch(filterBlogs(e.target.value));
  // };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>An error occurred</p>;

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
            value={''}
            onChange={()=>{}}
          />
          <button className="h-16 bg-blue-600 text-white border rounded-full w-48 mr-12">
            + New Blog
          </button>
        </div>
        <div className="hidden xl:col-span-1"></div>
      </div>
      <div className="mt-8 flex flex-col gap-4 justify-center items-center">
        {relatedBlogs.map((blog: Blog) => (
          <Link key={blog._id} href={`/blogs/${blog._id}`} className='w-full flex items-center justify-center'> 
            <BlogItem blog={blog} />
          </Link >
        ))}
      </div>
    </>
  );
};

export default BlogPage;
