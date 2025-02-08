import React, { useState, useEffect } from 'react';
//import mesh from "../assets/images/Mesh.png";
//import { NavLink } from 'react-router-dom';
import image6 from '../assets/img/WhatsApp_Image_2024-10-20_at_09.03.19_6578ea68-removebg-preview (1).png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    //const [isTransparent, setIsTransparent] = useState(true);
    const [isScrolled, setIsScrolled] = useState(true)
    const [showModal , setShowModal] =  useState(false)
    const [textColor , setTextColor] = useState('text-white')

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleShowModal = () =>{
        setShowModal(true)
    }

    const handleCloseModal =() =>{
        setShowModal(false)
    }
    useEffect(()=>{
        const handleScroll = () =>{
            const scrollDown = window.scrollY;
            if(scrollDown > 50){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
            //setIsScrolled(scrollDown >50); 
        }
        handleScroll()
        window.addEventListener('scroll',handleScroll)

        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }

    },[])
    // Function to check the background color and set the text color accordingly
    useEffect(() => {
        const checkBackgroundColor = () => {
            const navbar = document.querySelector('header')
            if (navbar) {
                const backgroundColor = window.getComputedStyle(navbar).backgroundColor; // Get its background color
                const isTransparent = backgroundColor === 'rgba(0, 0, 0, 0)'; 
                //const rgb = backgroundColor.match(/\d+/g); // Extract RGB values
                if (isTransparent) {
                    setTextColor('text-black')
                    /*const brightness = Math.sqrt(
                        0.299 * (rgb[0] ** 2) + // Red
                        0.587 * (rgb[1] ** 2) + // Green
                        0.114 * (rgb[2] ** 2)   // Blue
                    );*/
                   // setIsDarkBackground(brightness < 128); // If brightness is low, it’s a dark background
                }else{
                    setTextColor('text-white')
                }
            }
        }

        checkBackgroundColor();
        window.addEventListener('resize', checkBackgroundColor); // Check on resize

        return () => window.removeEventListener('resize', checkBackgroundColor);
    }, []);

    return (
        <div className='font-poppins '>
            <header className= 'w-screen fixed top-0 z-50  bg-black   '>
                <nav className=" max-w-7xl  mx-auto px-4 md:px-1 py-2 flex gap-[6.19%] items-center">
                    <div className='flex-shrink-0 w-[11.48vw] mr-[19.10vw] pl-3'>
                  <img src={image6} alt='logo' className=' h-16'/>
                    </div>
                    <div className={`hidden lg:flex md:flex xl:flex  gap-8  justify-end float-end relative  md:right-16 lg:left-28 xl:left-28 ${textColor} `}>
                        <a
                            href="/"
                        >
                           <text  className={` text-white  hover:text-[#eeca4b] transition-colors text-base text-center font-bold not-italic`}>Home</text> 
                        </a>
                        <a
                            href="/about-us"
                           
                        >
                           <text   className={` text-white  hover:text-[#eeca4b] transition-colors text-base text-center font-bold not-italic`}>About Us</text> 
                        </a>
                        <a
                            href="/services"
                        >
                            <text  className={`  text-white  hover:text-[#eeca4b]  transition-colors text-base text-center font-bold not-italic`}>Services</text>
                        </a>
                        <a
                            href="/contact-us"
                           
                        >
                           <text  className={`  text-white  hover:text-[#eeca4b] transition-colors text-base text-center font-bold not-italic`}>Contact Us</text> 
                        </a>
                       
                    </div>
                   

                    {/* Hamburger Icon for small screens */}
                    <div className="md:hidden xl:hidden lg:hidden fixed right-0 ">
                        
                        <button onClick={toggleOpen} className="focus:outline-none right-0">
                            <svg
                                className={` w-6 h-6`}
                                fill="none"
                                color="white"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                        
                    </div>
                </nav>
                {/* Dropdown menu for small screens */}
                {isOpen && (
                    <div className="md:hidden lg:hidden xl:hidden ">
                        <a href="/" className="block px-4 py-2  hover:text-pink-400">
                            Home
                        </a>
                        <a href="/about-us" className="block px-4 py-2 hover:text-pink-400">
                            About Us
                        </a>
                        <a href="/services" className="block px-4 py-2 hover:text-pink-400">
                           Services
                        </a>
                        <a href="/contact-us" className="block px-4 py-2 hover:text-pink-400">
                            Contact Us
                        </a>
                       
                        
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;
