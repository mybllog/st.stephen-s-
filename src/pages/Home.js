/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Dialog } from "@headlessui/react";
//import { PlayCircleIcon } from "@heroicons/react/24/solid";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import churchVideo from '../assets/video/church.mp4';
import image2 from '../assets/img/pexels-field-engineer-147254-442150.jpg';
import image3 from '../assets/img/pexels-pixabay-60504.jpg';
import image4 from '../assets/img/pexels-shvetsa-3727469.jpg';
import image5 from '../assets/img/pexels-tara-winstead-8386440.jpg';
import church1 from '../assets/img/chuch1.jpg';
import church2 from '../assets/img/church2.jpg';
import { Button, Paper } from '@mui/material';
import Ratings from '../components/Ratings';
import youth from '../assets/img/youth.jpg'
import usher from '../assets/img/usher.jpg'
import LogoMarquee from '../components/LogoMarquee';
import Newsletter from '../components/Newsletter';
import img4 from '../assets/img/altar2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
 faPeopleGroup,
 faPerson,
 faPlayCircle
}from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import Altar from '../assets/img/childrens.jpg'
import childrens from '../assets/img/childrens.jpg'
import LogoMarquee1 from '../components/LogoMarquee1';
import choir from '../assets/img/choirs.jpg'
import children from '../assets/img/childrenss.jpg'
import women from '../assets/img/women.jpg'
const Home = () => {
  /*const settings = {
    //dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };*/

  const images = [
    {
      video: churchVideo,
      text1: 'make a difference today',
      text2:
        'Loving God, loving other and serving the world !',
        text3:'Experience God’s love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished.',
        text4:'Join In Person',
        text5:'Donate now',
      alt: 'Experience God’s love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished.',

       
    },
    
  ];

  const services = [
    { title: "Children's Ministry", image: children },
    { title: "Youth Ministry", image: youth },
    { title: "Men Fellowship", image: youth },
    { title: "Women Fellowship", image: women },
    { title: "Choir", image: choir },
  ];
  
  const service = [
    { id: 2, title: "Online Service", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRLv009OfrS4zCl_52z7SLhyJCZRB1frOIQ&s'},
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Home - Your Business Growth Partner</title>
        <meta
          name="description"
          content="Achieve seamless digital transformation, secure your data, and optimize network performance with expert consultation and cloud-driven solutions."
        />
        <meta name="keywords" content="Digital Transformation, Cloud Solutions, Network Optimization, Business Consultation" />
      </Helmet>

      <main className="w-full h-auto overflow-hidden font-poppins">
        {/* Hero Slider */}
        <section aria-label="Hero Slider" className="w-full">
          {/*<Slider {...settings}>
            {images.map((item, index) => (
              <article key={index} className="relative w-full h-80 md:h-[500px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center p-4"
                  role="region"
                  aria-label={`Slide ${index + 1}`}
                >
                  <h1 className="text-lg md:text-2xl font-bold mb-2">{item.text1}</h1>
                  <p className="text-sm md:text-base">{item.text2}</p>
                </div>
              </article>
            ))}
          </Slider>*/}
          {images.map((item, index) => (
              <article key={index} className="relative w-full h-80 md:h-[500px]">
              <video  src={item.video} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                 autoPlay 
                 loop
                  muted
                  
          />
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center p-4 space-y-8"
                  role="region"
                  aria-label={`Slide ${index + 1}`}
                >
                  <p className="text-lg md:text-lg font-bold mb-2 text-[#eeca4b]">{item.text1}</p>
                  <h1 className="text-sm md:text-5xl font-bold">{item.text2}</h1>
                  <p>{item.text3}</p>
                  <div className='flex space-x-5'>
                    <Button variant="contained"
              sx={{
                backgroundColor: '#eeca4b', // Custom pink color
                '&:hover': {
                  backgroundColor: '#0000', // Darker pink on hover
                },
                color: 'white', // Ensures text color is white,
                 borderRadius:'100%'
              }}
              aria-label="Contact Us for Consultation" className=' rounded-full text-white '>{item.text4}</Button>
                    <Button
                    variant="contained"
              sx={{
                backgroundColor: '#ffff', // Custom pink color
                '&:hover': {
                  backgroundColor: '#0000', // Darker pink on hover
                },
                color: '#eeca4b', // Ensures text color is white,
                borderRadius:'100%'
              }}
              aria-label="Contact Us for Consultation" className=' rounded-full  text-[#eeca4b]'>{item.text5}</Button>
                  </div>
                </div>
              </article>
            ))}
            <LogoMarquee/>
        </section>

        {/* Consultation Section */}
        <section
  className="flex flex-col md:flex-row w-full py-16 md:py-20"
  aria-labelledby="consultation-heading"
>
  {/* Image Section */}
  <div className="flex flex-col md:flex-row w-full md:w-1/2 space-y-6 md:space-y-0 relative">
    <div className="rounded-r-full overflow-hidden w-full md:w-10/12">
      <img
        src={church1}
        alt="Business consultation for growth"
        className="w-full h-auto object-cover  brightness-110 rounded-e-full"
        loading="lazy"
      />
    </div>
    <div className="absolute top-1/2 left-1/4 transform -translate-y-10  brightness-110  -translate-x-28">
      <img
        src={church1}
        alt="Business consultation for growth"
        className="w-8/12 md:w-10/12 object-cover rounded-e-full"
        loading="lazy"
      />
    </div>
  </div>

  {/* Text Content Section */}
  <div
    className="bg-white w-full md:w-1/2 px-6 py-8 md:px-12 md:py-10"
    role="region"
  >
    <h2
      id="about-us"
      className="text-2xl md:text-xl font-bold text-gray-800 mb-4"
    >
      ABOUT US
    </h2>

    <h1 className="font-bold text-4xl  text-black mb-4">
      Faith, hope, and love in action every day
    </h1>
    <p className="text-sm md:text-base text-black mb-6 leading-relaxed">
      We are a vibrant community of believers dedicated to worship, fellowship,
      and service. Our mission is to share God’s love, grow in faith, and make
      a positive impact in the world through compassionate outreach and
      meaningful connections.
    </p>
    <p className="text-sm md:text-base text-black mb-6 leading-relaxed">
      Our church is a welcoming place where everyone can find support,
      inspiration, and a sense of belonging. Together, we strive to live out
      our faith and make a difference.
    </p>

    {/* Goals Grid */}
    <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
      <div>
        <div className='flex space-x-2'>
        <FontAwesomeIcon icon={faPerson} className='text-[#eeca4b]' />
        <p>Share God's Love</p>
        </div>
       <div className='flex space-x-2'>
       <FontAwesomeIcon icon={faPerson} className='text-[#eeca4b]' />
       <p>Foster spiritual growth</p>
       </div>
      </div>
      <div>
       <div className='flex space-x-2'>
       <FontAwesomeIcon icon={faPeopleGroup} className='text-[#eeca4b]' />
       <p>Serve our community</p>
       </div>
        <div className='flex space-x-2'>
        <FontAwesomeIcon icon={faPeopleGroup} className='text-[#eeca4b]' />
        <p>Build strong relationships</p>
        </div>
      </div>
    </div>

    {/* Button */}
    <NavLink to='/about-us'>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#eeca4b', // Custom pink color
        '&:hover': {
          backgroundColor: '#000', // Darker pink on hover
        },
        color: 'white', // Ensures text color is white
        marginTop: '1rem', // Adds spacing from the grid above
        borderRadius:'100%'
      }}
      aria-label="Contact Us for Consultation"
    >
      Read More About Us
    </Button>
    </NavLink>
   
  </div>
</section>


        {/* Testimonials Section */}
        <section
  className="my-5 px-4  ease-linear  bg-[#ec3237] py-12 md:py-10"
  aria-labelledby="testimonials-heading"
>
  {/* Heading */}
  <h2
    id="testimonials-heading"
    className="text-lg md:text-xl font-bold text-center mb-6 text-[#eeca4b]"
  >
    Worship with us
  </h2>
  <h1 className="text-2xl md:text-3xl font-bold text-black text-center uppercase mb-4">
    Join us on Sunday at
  </h1>
  <p className="text-2xl md:text-3xl font-bold text-[#eeca4b] text-center uppercase mb-8">
    8:00 & 9:00 AM
  </p>

  {/* Content Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Full Image */}
    <div className="relative flex flex-col items-center">
  {/* Altar Image */}
  <img
    src={youth}
    alt="Altar"
    className="bg-cover w-full md:w-10/12 max-w-[600px] brightness-125 rounded-t-full"
  />

  {/* Overlay Content */}
  <div className="absolute top-1/2 transform -translate-y-1/2 w-11/12 md:w-9/12 max-w-[500px] bg-white px-6 py-4 rounded-t-full shadow-lg text-center">
    <h1 className="font-bold text-lg md:text-2xl text-gray-800">Youth Worship</h1>
    <p className="text-sm md:text-base text-gray-600">
      Engaging teens in faith, fellowship, growth.
    </p>
  </div>
</div>


    {/* Worship Sections */}
    <div className="space-y-8">
      {/* Children's Worship */}
      <div className="flex items-start space-x-4">
        <img
          src={Altar}
          alt="Children's Worship"
          className="bg-cover w-6/12 max-w-[160px] brightness-125 rounded-t-full"
        />
        <div>
          <p className="text-lg font-semibold">Children's Worship</p>
          <p className="text-sm md:text-base text-gray-800">
            Fun, faith-filled worship for kids ages 4-12.
          </p>
        </div>
      </div>

      {/* Sunday School Worship */}
      <div className="flex items-start space-x-4">
        <img
          src={Altar}
          alt="Sunday School Worship"
          className="bg-cover w-6/12 max-w-[160px] brightness-125 rounded-t-full"
        />
        <div>
          <p className="text-lg font-semibold">Sunday School Worship</p>
          <p className="text-sm md:text-base text-gray-800">
            Learning and worship for all ages.
          </p>
        </div>
      </div>

      {/* Additional Children's Worship */}
      <div className="flex items-start space-x-4">
        <img
          src={Altar}
          alt="Children's Worship"
          className="bg-cover w-6/12 max-w-[160px] brightness-125 rounded-t-full"
        />
        <div>
          <p className="text-lg font-semibold">Children's Worship</p>
          <p className="text-sm md:text-base text-gray-800">
            Fun, faith-filled worship for kids ages 4-12.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*<section className='border w-11/12 mx-auto px-4 sm:px-6 h-auto bg-[#ec3237] rounded-br-full py-8 sm:py-10'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
  </div>
</section>*/}


<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 px-6 md:px-12 lg:px-10">
  <div className="flex flex-col justify-center items-start">
    <h2 className="text-[#eeca4b] text-sm font-bold">OUR MISSION</h2>
    <h1 className="leading-10 my-8 font-extrabold text-3xl md:text-4xl uppercase">
      Our Mission to Serve, Love, <p className="text-[#eeca4b]">AND Grow</p>
    </h1>
    <p className="my-6 text-black font-bold text-base md:text-lg">
      Our mission is to share God's love, foster spiritual growth, and serve our community with compassion and purpose.
    </p>
    <div className="flex items-center space-x-4 my-6">
      <div className="border border-[#eeca4b] h-20 w-0"></div>
      <p className="text-sm md:text-base w-full">
        Our mission is to share God’s love and grace by fostering spiritual growth, serving our community with compassion, and building meaningful relationships. We are dedicated to living out our faith through worship, outreach, and impactful service.
      </p>
    </div>
    <Button
      type=""
      variant="contained"
      sx={{
        backgroundColor: '#eeca4b',
        '&:hover': {
          backgroundColor: '#000',
        },
        color: 'white',
        marginTop: '1rem',
        borderRadius: '100%',
        padding: '0.5rem 1.5rem',
      }}
      aria-label="Contact Us for Consultation"
    >
      Contact Now
    </Button>
    
  </div>

  <div className="flex justify-center items-center">
    <img
      src={img4}
      alt="altar"
      className="object-cover w-full h-auto max-w-md md:max-w-lg brightness-125 lg:max-w-xl rounded-br-[120px]"
    />
  </div>
</section>

<section
      className="px-6 py-12 bg-[#ec3237] ease-linear"
      aria-labelledby="services-heading"
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-sm md:text-base text-[#eeca4b] uppercase tracking-wide font-bold">
          Online service
        </p>
        <h1
          id="services-heading"
          className="font-bold text-2xl md:text-4xl text-black leading-snug"
        >
          Come and worship with us{" "}
          <span className="text-[#eeca4b]">together</span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
      {service.map((servic) => (
        <div
          key={servic.id}
          className="relative overflow-hidden rounded-xl shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Background Image */}
          <img
            src={servic.image}
            alt={servic.title}
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />

          {/* Text Overlay */}
          <div className="relative z-10 bg-black/60 text-white p-4 text-center rounded-b-xl">
            <p className="text-lg font-semibold">{servic.title}</p>
            <p className="text-sm opacity-90 mt-2">{servic.description}</p>
          </div>

          {/* YouTube Icon */}
          {servic.video && (
            <button
              onClick={() => openVideo(servic.video)}
                className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:scale-110 transition"
            >
        <FontAwesomeIcon icon={faPlayCircle} className="w-8 h-8" />

            </button>
          )}
        </div>
      ))}

      {/* Video Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black/80">
        <div className="relative bg-white rounded-lg p-4 w-4/5 max-w-2xl">
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-xl">&times;</button>
          <iframe
            width="100%"
            height="315"
            src={currentVideo}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </Dialog>
    </div>


      {/* Logo Marquee Section */}
      <div className="mt-10">
        <LogoMarquee1 />
      </div>
    </section>

{/* Red Background Section */}
<section
      className="px-6 py-16 bg-[#ec3237] text-white text-center"
      aria-labelledby="testimonials-heading"
    >
      {/* Header Section */}
      <div className="max-w-3xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-wide font-semibold">
          Church group
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug my-6">
          Loving God, helping others, and serving the{" "}
          <span className="text-[#ffff]">world together</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" ,stiffness:100}}
           
          >
            <Paper
              className="relative rounded-xl overflow-hidden shadow-lg"
              sx={{
                backgroundColor: "#fff",
                height: "auto",
                minHeight: "300px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full brightness-125 object-cover"
              />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 bg-black bg-opacity-50 p-6 backdrop-blur-md"
              >
                <p className="text-lg md:text-xl font-medium text-white">
                  {service.title}
                </p>
              </motion.div>
            </Paper>
          </motion.div>
        ))}
      </div>
    </section>

{/* Additional Section */}
<section className="px-4 py-10 bg-white text-center">
  <p className="text-gray-800 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
    Explore the exciting new ways we are serving our community and growing
    together in faith with our latest ministry initiatives.{" "}
    <a
      href="#"
      className="text-[#eeca4b] font-bold hover:underline"
    >
      View All Ministries
    </a>
  </p>
</section>

<motion.div
  className="relative w-full px-6 py-16 bg-gray-900 text-white overflow-hidden"
  aria-labelledby="Donate now"
>
  {/* Background Image with Overlay */}
  <motion.img
    src={church1}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover brightness-125 z-0 opacity-40"
  />

  {/* Container */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
    {/* Video Section */}
    <motion.video
      autoPlay
      muted
      loop
      className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-lg shadow-lg"
    >
      {/* Video content */}
    </motion.video>

    {/* Donation Info Section */}
    <motion.div className="flex justify-center items-center"
   whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 }
  }}
    >
      <Paper className="w-full p-8 rounded-xl bg-white/10 backdrop-blur-lg shadow-xl">
        <div className="text-center">
          <p className="text-[#eeca4b] text-lg font-bold uppercase tracking-wide">
            Donate Now
          </p>
          <h2 className="text-2xl font-semibold mt-2">Support Our Mission</h2>
          <p className="text-gray-300 mt-3">
            Your generous support enables us to continue spreading God’s love and serving our community.
          </p>

          {/* Bank Details */}
          <div className="mt-6 border-t border-gray-600 pt-6">
            <p className="text-lg font-semibold text-gray-300">Account Information</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 text-gray-300">
              <div>
                <p className="font-medium">Bank Name</p>
                <p className="text-gray-400">[First Bank]</p>
              </div>
              <div>
                <p className="font-medium">Account Name</p>
                <p className="text-gray-400">[St Stephen's Military Church]</p>
              </div>
              <div className="col-span-2">
                <p className="font-medium">Account Number</p>
                <p className="text-gray-400">[3031412875]</p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </motion.div>
  </div>
</motion.div>


        {/* Newsletter Section */}
       
      </main>
    </>
  );
};

export default Home;
