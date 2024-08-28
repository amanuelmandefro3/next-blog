"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetBlogByIdQuery } from "@/libs/redux/api/blogsApi";
import Image from "next/image";
import RelatedBlogs from "@/app/components/RealtedBlogs"; // Assuming this component is correctly named.
const relatedBlogs = [
  {
    _id: "64e71d4bffcc678c7782c66b",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692867633/A2sv/mdvs5jef91utxwbouiki.jpg",
    title: "Best Practices for Clean Code",
    description:
      "Writing clean code is crucial for building maintainable and scalable applications. This blog explores the best practices for clean code, focusing on readability, simplicity, and adherence to coding standards. Learn how to make your code self-explanatory and easy to maintain.",
    author: {
      _id: "64e70f7affcc678c7782c558",
      name: "Bruk Mk",
      email: "bruk.mokenen@a2sv.org",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692879691/A2sv/tcp2nlkggansqvjrw1kd.png",
      role: "user",
    },
    isPending: true,
    tags: ["Programming", "Clean Code"],
    likes: 0,
    relatedBlogs: [],
    skills: ["Web Development", "Mobile"],
    createdAt: "2023-08-24T10:15:21.057Z",
    updatedAt: "2023-08-24T10:15:21.057Z",
    __v: 0,
  },
  {
    _id: "64e71e22ffcc678c7782c67c",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692867633/A2sv/mdvs5jef91utxwbouiki.jpg",
    title: "Design Patterns for Scalable Software",
    description:
      "Understanding design patterns is key to building scalable and maintainable software. This blog covers the essential design patterns every developer should know, and how to apply them in real-world scenarios. From Singleton to Factory patterns, let's explore their use cases and benefits.",
    author: {
      _id: "64e70f7affcc678c7782c558",
      name: "Bruk Mk",
      email: "bruk.mokenen@a2sv.org",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692879691/A2sv/tcp2nlkggansqvjrw1kd.png",
      role: "user",
    },
    isPending: true,
    tags: ["Software Engineering", "Design Patterns"],
    likes: 0,
    relatedBlogs: [],
    skills: ["Web Development", "Mobile"],
    createdAt: "2023-08-24T10:45:12.057Z",
    updatedAt: "2023-08-24T10:45:12.057Z",
    __v: 0,
  },
  {
    _id: "64e71f7bffcc678c7782c68d",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692867633/A2sv/mdvs5jef91utxwbouiki.jpg",
    title: "Code Smells: Identifying and Fixing Common Issues",
    description:
      "Code smells are often the first indication that something is wrong with your codebase. This blog focuses on identifying common code smells and offers strategies to fix them. Learn how to detect and refactor code smells to maintain a clean and efficient codebase.",
    author: {
      _id: "64e70f7affcc678c7782c558",
      name: "Bruk Mk",
      email: "bruk.mokenen@a2sv.org",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692879691/A2sv/tcp2nlkggansqvjrw1kd.png",
      role: "user",
    },
    isPending: true,
    tags: ["Code Quality", "Refactoring"],
    likes: 0,
    relatedBlogs: [],
    skills: ["Web Development", "Mobile"],
    createdAt: "2023-08-24T11:10:45.057Z",
    updatedAt: "2023-08-24T11:10:45.057Z",
    __v: 0,
  },
];

const blog = {
  _id: "64e86f8c708f39f28f2ae2af",
  image:
    "https://res.cloudinary.com/djtkzulun/image/upload/v1692954508/A2sv/dsmcnmr0uxte3p0w0i4b.jpg",
  title: "New blog post",
  description:
    "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit id praesent massa orci, varius mattis tortor sociosqu turpis vehicula erat pretium fringilla ad faucibus, luctus nulla donec euismod sem duis rhoncus rutrum tempor condimentum. Facilisis aliquet at diam nisl facilisi proin morbi, iaculis nec nullam semper arcu inceptos lacus euismod, vehicula cras suspendisse torquent fermentum consequat. Montes pretium suscipit scelerisque molestie mi aliquet tempor, netus conubia ante sociosqu leo condimentum viverra, nunc ultrices posuere erat a semper.</p><p>Non habitasse aptent eleifend praesent euismod tortor libero sapien dis, eget sociis tincidunt ante phasellus dictum molestie consequat morbi pellentesque, fermentum est tempus egestas ullamcorper venenatis hendrerit mus. Cras faucibus dapibus posuere sed aliquet tempus, sagittis per natoque id sem in sollicitudin, tincidunt egestas eleifend rutrum magna. Aenean congue dis aliquet magnis urna cras tempor tortor venenatis, praesent ultricies bibendum est non pretium donec ante massa orci, pellentesque interdum parturient habitasse id ullamcorper dui posuere.</p><p><br></p>",
  author: {
    _id: "64dfe6fb50961c55ce93e7de",
    name: "bruke updated",
    email: "bruk@a2sv.org",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
    role: "user",
  },
  isPending: true,
  tags: ["development"],
  likes: 0,
  relatedBlogs: [],
  skills: ["development"],
  createdAt: "2023-08-25T09:08:28.532Z",
  updatedAt: "2023-08-25T09:08:28.532Z",
  __v: 0,
};
const BlogDetail = () => {
  // const { id }:{id:string} = useParams(); // Assuming your routing is like /blogs/:id
  // const { data: blog, error, isLoading } = useGetBlogByIdQuery(id);

  // if (isLoading) return <div>Loading...</div>;
  // if (error || !blog) return <div>Error loading blog details</div>;

  return (
    <div className=" flex flex-col mx-auto ">
      <div className="title text-5xl mt-5 text-center my-2">{blog.title}</div>
      <div className="title mt-5 text-center my-2">
        {blog.tags.join(", ")} | {new Date(blog.createdAt).toDateString()}
      </div>
      {/* <Image
        src={blog.image}
        width={450}
        height={250}
        alt="blog-image"
        className="self-center"
      /> */}
      <div className="relative w-11/12 h-[500px] overflow-hidden self-center my-2">
        <Image
          src={blog.image}
          layout="fill"
          alt="blog-image"
          className="self-center"
          objectFit="cover"
        />
      </div>

      <div className="relative w-[80px] h-[80px] border rounded-full overflow-hidden self-center my-2">
        <Image
          src={blog.author?.image || "https://via.placeholder.com/90"}
          alt="profile"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-10/12 self-center">
        <div className="title text-center my-3">
          {blog.author?.name || "John Doe"} |{" "}
          {blog.author?.role || "Unknown Role"}
        </div>
        <h3 className="text-4xl font-regular">
          We know that data structure and algorithm can seem hard at first
          glance. And you may not be familiar with advanced algorithms, but
          there are simple steps you can follow to see outstanding results in a
          short period of time.
        </h3>
        <p className="text-xl my-10">{blog.description}</p>
      </div>

      <div className="flex gap-4 mx-auto w-11/12">
        {relatedBlogs.length > 0 ? (
          relatedBlogs.map((relatedBlog) => (
            <RelatedBlogs key={relatedBlog._id} />
          ))
        ) : (
          <p>No related blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
