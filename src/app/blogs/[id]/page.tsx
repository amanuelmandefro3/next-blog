import React from "react";
import Image from "next/image";
import RelatedBlogs from "@/app/components/RealtedBlogs";

const BlogDetail = () => {
  return (
    <div className="w-10/12 flex flex-col mx-auto ">
      <div className="title  text-5xl mt-5 text-center my-2">
        The essential guide to Competitive Programming
      </div>
      <div className="title   mt-5 text-center my-2">
        Programming, tech | 6 min Read
      </div>
      <Image
        src="/blog-image.jpg"
        width={450}
        height={250}
        alt="blog-image"
        className="self-center"
      />

      <Image
        src="https://via.placeholder.com/90"
        width={80}
        height={80}
        alt="profile"
        className="border rounded-full my-3 self-center"
      />
      <div className="title    text-center my-3">
        Cheltu Kebede | Software Engineering
      </div>
      <h3 className="text-4xl font-regular">
        We know that data structure and algorithm can seem hard at first glance.
        And you may not be familiar with advanced algorithms, but there are
        simple steps you can follow to see outstanding results in a short period
        of time.
      </h3>
      <p className="text-xl my-10"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="text-xl my-10"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="text-xl my-10"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

        <div className="flex gap-4">
        <RelatedBlogs/> 
        <RelatedBlogs/> 
        <RelatedBlogs/> 
        </div>
      
    </div>
  );
};

export default BlogDetail;
