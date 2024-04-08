import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import Services from '../pages/services';
import Contact from '../pages/contact';
import Blog from '../pages/FAQ';
import NotFound from '../pages/NotFound';
import { ImLinkedin2 } from "react-icons/im";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import logo from"../Images/lambton.jpg"
const Footer = () => {
    return (
      <div className='w-full flex  h-[250px] bg-[#FC3E5E] text-[#ECEFEF]  '>
            <div className='w-[70%] flex mx-auto  justify-between items-center h-full outline-none '>
                {/* 1s column of footer */}
                <div className='flex-row  min-h-[83px] p-2'>
                    
                    <h1 className='text-2xl'>COMPANY</h1>
                    
                    <ul className=' font-medium'>
                        <li>
                            <NavLink to={"/about"}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"}>Our Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/FAQs"}>FAQs</NavLink>
                        </li>
                    </ul>
                    
                </div>
             {/* 2nd column of footer*/}
                <div className=' flex-row min-h-[83px] p-2'>
                    <h1 className='text-2xl'>CONTACT</h1><br/>
                    <div>
                        <span>RentHub@com</span>
                        <div className='flex justify-between'>
                            <div><ImLinkedin2 /></div>
                            <div><LuTwitter /></div>
                            <div><FaInstagram /></div>
                            <div><LuFacebook /></div>
                        </div>
                    </div>
                </div>

                
                {/* 3rd column of footer */}
                <div className='flex-row min-h-[83px] p-2'>
                    <h1 className='text-2xl'>Trusted By</h1><br/>
                    <div>
                        <img src={logo} className='w-[90px]'/>
                    </div>
                </div>
            </div>
      </div>
    )
  }

export default Footer;
