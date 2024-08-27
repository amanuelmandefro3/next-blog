import React from 'react';

const Header = () => {
  return (
    <div className='grid grid-cols-2 xl:col-span-3 items-center'>
      <div className="col-span-1 font-semibold text-3xl mx-16">
        Blogs
      </div>
      <div className="col-span-1 flex items-center gap-8"> {/* Center the input and button in its grid cell */}
        <input type="text" className='border-2 border-gray-700 rounded-full w-96 h-16 px-8' placeholder="Search..." />
        <button className="h-16 bg-blue-600 text-white border rounded-full  !w-48 mr-12">+ New Blog</button> 
      </div>
      <div className="hidden xl:col-span-1">
      </div>
    </div>
  );
}

export default Header;
