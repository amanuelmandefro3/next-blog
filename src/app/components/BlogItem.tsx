import React from 'react';
import Image from 'next/image';
import { Blog } from '@/libs/redux/types';

interface BlogItemProps {
  blog: Blog;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <section className="w-10/12 border-t-2 flex items-center gap-2 hover:cursor-pointer">
      <div className='w-3/4'>
        <div className="user flex gap-5 items-center mt-8">
          <div className="relative w-[90px] h-[90px] border rounded-full overflow-hidden">
            <Image
              src={blog.author?.image || "https://via.placeholder.com/90"}
              alt="profile"
              layout="fill" // Fill the container
              objectFit="cover" // Ensures the image covers the container
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <h1 className="font-semibold text-xl">{blog.author?.name || "Unknown"} {" . "}</h1>
              <span className="text-gray-500 font-medium text-[18px]">
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="text-gray-500 text-[18px] font-semibold">
              {blog.author?.role || "Unknown Role"}
            </div>
          </div>
        </div>
        <div className="title font-bold text-4xl mt-5">{blog.title}</div>
        <p className="content text-2xl mt-4">{blog.description}</p>
        <div className="tags flex gap-2 items-center mt-4 mb-8">
          {blog.tags.map((tag, index) => (
            <div
              key={index}
              className="min-w-40 border rounded-3xl bg-gray-100 px-4 py-2 text-center"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-[450px] h-[250px] overflow-hidden">
        <Image
          src={blog.image}
          alt="blog-image"
          layout="fill" // Fill the container
          objectFit="cover" // Ensures the image covers the container
        />
      </div>
    </section>
  );
};

export default BlogItem;
