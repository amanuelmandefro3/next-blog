import React from 'react'
import BlogItem from '@/app/components/BlogItem'

const BlogPage = () => {
  return ( 
    <div className='mt-8 flex flex-col gap-4 justify-center items-center'>
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  )
}

export default BlogPage
