import React from "react";
import Image from "next/image";

const BlogItem = () => {
  return (
    <section className="w-10/12 border-t-2 flex items-center">
      <div>
        <div className="user flex gap-5 items-center mt-8">
          <Image
            src="https://via.placeholder.com/90"
            width={90}
            height={90}
            alt="profile"
            className="border rounded-full"
          />
          <div className="flex flex-col gap-2">
            <div className=" flex items-center ">
              <h1 className="font-semibold text-xl">Yididiya Kebede {" . "}</h1>
              <span className="text-gray-500 font-medium text-[18px]">
                {" "}
                Apr 16, 2022{" "}
              </span>
            </div>
            <div className="text-gray-500 text-[18px] font-semibold">
              Software Engineer
            </div>
          </div>
        </div>
        <div className="title font-bold text-4xl mt-5">
          The essential guide to Competitive Programming
        </div>
        <p className="content text-2xl mt-4">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea{" "}
        </p>
        <div className="tags flex gap-2 items-center mt-4 mb-8">
          <div className="min-w-40 border rounded-3xl bg-gray-100 px-4 py-2 text-center font-">
            UI/UX
          </div>
          <div className="min-w-40 border rounded-3xl bg-gray-100 px-4 py-2 text-center">
            Development
          </div>
        </div>
      </div>
      <Image src="/blog-image.jpg" width={450} height={250} alt="blog-image"/>
    </section>
  );
};

export default BlogItem;
