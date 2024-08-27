import React from 'react'
import Image from 'next/image'
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='mx-16 border-t-2 pt-4'>
      <div className="links flex justify-between items-center space-x-8"> 
        <Image src="/rafiki.png" width={296} height={220} alt="help partner" />
        
        <div className='max-w-96'>
          <h3 className="font-semibold text-2xl">Get involved in improving tech education in Africa!</h3>
          <button className="bg-blue-500 px-4 py-2 text-white border rounded-xl font-bold text-xl mt-4">Support us</button>
        </div>

        <div className='self-start space-y-4'>
          <h1 className="font-semibold text-xl ">Links</h1>
          <ul className="space-y-4 font-light text-xl">
            <li>Home</li>
            <li>Success Stories</li>
            <li>About us</li>
            <li>Get Involved</li>
          </ul>
        </div>

        <div className='self-start space-y-4'>
          <h1 className="font-semibold text-xl mb-2">Teams</h1>
          <ul className="space-y-4 font-light text-xl">
            <li>Board Members</li>
            <li>Advisors/Mentors</li>
            <li>Executives</li>
            <li>Staffs</li>
          </ul>
        </div>

        <div className="blog-links self-start space-y-4">
          <h1 className="font-semibold text-xl  ">Blog</h1>
          <ul className="space-y-4 font-light text-xl">
            <li>Recent Blogs</li>
            <li>New Blog</li>
          </ul>
        </div>
      </div>

      <div className="copy-right mx-8 flex justify-between h-16 items-center border-t-2"> 
        <p>
            © {new Date().getFullYear()}  Africa to Silicon Valley, Inc. All right reserved
        </p> 
        <div className="flex gap-4"> 
            <FaTwitter/>
            <FaFacebook />
            <FaYoutube />
            <FaLinkedin />
            <FaInstagram />
        </div>
      </div>
    </section>
  )
}

export default Footer
