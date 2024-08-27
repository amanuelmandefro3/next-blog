import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const RelatedBlogs = () => {
  return (
    <div className="w-1/3 shadow-md border rounded-md my-2">
      <div className="relative" style={{ aspectRatio: "16/9" }}>
        <Image
          src="/related-blog.png"
          fill
          objectFit="cover"
          alt="related-blog"
        />
      </div>

      <div className="mx-4 mt-2">
        <h3 className=" font-medium text-lg">
          Design Liberalized Exchange Rate Management
        </h3>
        <div className="flex items-center">
          <Image
            src="https://via.placeholder.com/90"
            width={28}
            height={28}
            alt="profile"
            className="border rounded-full my-2 mr-1"
          />
          <span className="text-gray-300 text-xs mx-1">by</span>
          <span className=" text-sm font-semibold mx-1">Yididiya Kebede</span>
          {/* write vertical line that is 1px wide and 20px long */}
          <div className="border-l h-4 mx-2"></div>
          <span className="text-gray-300 text-xs mx-1">Apr 16, 2022</span>
        </div>

            {/* add tag her */}
            <div className="flex gap-2 items-center mt-4 mb-8">
                <div className="min-w-24 border rounded-3xl bg-gray-100 px-4 py-2 text-center font-semibold text-xs">
                    UI/UX
                </div>
                <div className="min-w-24 border rounded-3xl bg-gray-100 px-4 py-2 text-center font-semibold text-xs">
                    Development
                </div>
            </div>    
        {/* add a little discription her */}
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        </p>  
      </div>
    </div>
  );
};

export default RelatedBlogs;
