import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import image1 from '../assets/img/altar2.jpg';
import { Lightbulb, Star, ChatRounded } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import pastor1 from '../assets/img/ekuma1.jpg'
import pastor2 from '../assets/img/otowo.jpg'
import pastor3 from '../assets/img/venis.jpg'
import { NavLink } from 'react-router-dom';
import church1 from '../assets/img/chuch1.jpg';
import church2 from '../assets/img/church2.jpg';
import img4 from '../assets/img/ekuma.jpg'
import CenteredTabs from '../components/tabs';
const About = () => {
  const [activeText, setActiveText] = useState(null);

  const services = [
    {
      id: 1,
      img: 'https://store.manifoldcomputers.com/Gbemiga_Delano-1.png',
      name: 'Gbemiga Delano',
      title: 'MD, Chief Executive Officer',
      description: `Gbemiga Delano is the founder, CEO, and visionary of Manifold Computers. A consummate business entrepreneur with over 30 years corporate management experience at the forefront of the delivery of Technology and Enterprise solutions.`,
    },
    {
      id: 2,
      img: 'https://store.manifoldcomputers.com/uju%20-1-.jpg',
      name: 'Uju Nwaobi-onyekwere',
      title: 'Chief Financial Officer',
      description: `Uju Nwaobi-Onyekwere brings over 8 years of dedicated service to Manifold as the Chief Financial Officer...`,
    },
  ];

  const service = [
    { id: 1, title: "Special Event" },
    { id: 2, title: "Online Service" },
    { id: 3, title: "Pastoral Service" },
  ];
  
  const pastors = [
    { title: "FG (REV) EE EKUMA", image: pastor1 },
    { title: "PD OTOWO", image: pastor2 },
    { title: "V ENIS", image: pastor3 },
  ];
  const handleTextToggle = (id) => {
    setActiveText(activeText === id ? null : id);
  };

  return (
    <div className="w-full font-poppins">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | Fullworks Limited</title>
        <meta
          name="description"
          content="Learn about Fullworks Limited, an ISO 9001:2015 certified IT System Integration Company delivering digital transformation solutions across Africa."
        />
        <meta name="keywords" content="Fullworks, IT Solutions, System Integration, Team, About Company" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-black text-white text-center">
  <img
    src={image1}
    alt="Hero section showcasing Manifold Computers"
    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] object-cover"
  />
  <p className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
    About Us
  </p>
</section>




      {/* Introduction */}
      <section
  className="flex flex-col md:flex-row w-full"
  aria-labelledby="consultation-heading"
>
  {/* Image Section */}
  <div className="flex flex-col md:flex-row w-full md:w-1/2 space-y-6 md:space-y-0 relative">
    <div className="rounded-r-full overflow-hidden w-full md:w-10/12">
      <img
        src={church1}
        alt="Business consultation for growth"
        className="w-full h-auto object-cover rounded-e-full"
        loading="lazy"
      />
    </div>
    <div className="absolute top-1/2 left-1/4 transform -translate-y-10 -translate-x-28">
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
    className="bg-white w-full md:w-1/2 px-6 py-8 md:px-12 md:py-14"
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
        <FontAwesomeIcon icon={faPerson} className='text-[#ec3237]' />
        <p>Share God's Love</p>
        </div>
       <div className='flex space-x-2'>
       <FontAwesomeIcon icon={faPerson} className='text-[#ec3237]' />
       <p>Foster spiritual growth</p>
       </div>
      </div>
      <div>
       <div className='flex space-x-2'>
       <FontAwesomeIcon icon={faPeopleGroup} className='text-[#ec3237]' />
       <p>Serve our community</p>
       </div>
        <div className='flex space-x-2'>
        <FontAwesomeIcon icon={faPeopleGroup} className='text-[#ec3237]' />
        <p>Build strong relationships</p>
        </div>
      </div>
    </div>

   
   
  </div>
</section>

      {/* Key Values */}

     {/* <section className='border w-11/12 mx-auto px-4 sm:px-6  bg-[#ec3237] rounded-br-[100px] py-8 my-9'>
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

{/* Red Background Section */}
<section
      className="px-6 py-12 bg-gradient-to-r from-[#b35457] to-[#877a45] ease-linear"
      aria-labelledby="services-heading"
    >
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
  <p className="text-sm md:text-base text-gray-800 uppercase tracking-widest font-semibold">
    Vision & Mission
  </p>
  
  <h1 
    id="services-heading" 
    className="font-extrabold text-2xl md:text-4xl text-black leading-snug"
  >
    Building a Faithful Community Through Love,{" "}
    <span className="text-[#ec3237]">Service, Worship, and Fellowship.</span>
  </h1>
  
  {/* Centered Tabs Component */}
  <div className="mt-6">
    <CenteredTabs />
  </div>
</div>


      {/* Cards Section */}
      {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.map((servic) => (
          <Paper
            key={servic.id}
            className="p-6 rounded-br-[40px]"
            sx={{
              backgroundColor: "#fff",
              minHeight: "300px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p className="text-gray-800 text-lg md:text-xl font-medium">
              {servic.title}
            </p>
          </Paper>
        ))}
      </div>
  */}
    </section>
      {/* Management Section */}
     { /*<section className="px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-8">Executive Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Paper
              key={service.id}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleTextToggle(service.id)}
              component="article"
            >
              <img
                src={service.img}
                alt={`Portrait of ${service.name}`}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ${
                  activeText === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-md mb-2">{service.title}</p>
                {activeText === service.id && (
                  <p className="text-sm text-center px-4">{service.description}</p>
                )}
              </div>
            </Paper>
          ))}
        </div>
      </section>*/}

      
<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 px-6 md:px-12 lg:px-10">
<div className="flex justify-center items-center">
    <img
      src={img4}
      alt="altar"
      className="object-cover w-full h-full max-w-md md:max-w-lg lg:max-w-xl rounded-br-[120px]"
    />
  </div>
  <div className="flex flex-col justify-center items-start">
    <h2 className="text-[#ec3237] text-sm font-bold">pastors message</h2>
    <h1 className="leading-10 my-8 font-extrabold text-3xl md:text-4xl uppercase">
   
    Walking in  <span className="text-[#ec3237]">Dominion</span>
    </h1>
    <p className="my-6 text-black font-bold text-base md:text-lg">
    Genesis 1:26-28; Luke 10:19
    </p>
    <div className="flex items-center space-x-4 my-6">
      <div className="border border-[#ec3237] h-20 w-0"></div>
      <p className="text-sm md:text-base w-full">
      our mission to serve the NAF Community through pastoral care, robust Biblical guidance, build the spiritual and moral resilience of personnel in order to fulfil Airpower tasks demanded by National Defense and security imperatives.
      </p>
    </div>
    
    <div className=' mt-4 p-2'>
      <p>FG (REV) EE EKUMA</p>
      <p>Chaplain</p>
    </div>
  </div>

 
</section>
<section
      className="px-6 py-16 bg-[#ec3237] text-white text-center"
      aria-labelledby="testimonials-heading"
    >
      {/* Header Section */}
      <div className="max-w-3xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-wide font-semibold">
          Chaplain
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug my-6">
        Meet Our Chaplains{" "}
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {pastors.map((pastor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <Paper
              className="relative rounded-br-[200px] overflow-hidden shadow-lg"
              sx={{
                backgroundColor: "#fff",
                height: "auto",
                minHeight: "300px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={pastor.image}
                alt={pastor.title}
                className="absolute inset-0 w-full h-full rounded-br-[200px] object-cover"
              />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 bg-black bg-opacity-50 p-4  top-60  backdrop-blur-sm "
              >
                <p className="text-lg md:text-xl font-medium text-white">
                  {pastor.title}
                </p>
              </motion.div>
            </Paper>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default About;
