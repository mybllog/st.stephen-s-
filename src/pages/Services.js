import React, { useState } from 'react';
import image1 from '../assets/img/churh3.jpg';
import church1 from '../assets/img/chuch1.jpg';
import church2 from '../assets/img/church2.jpg';
import { motion } from 'framer-motion';
import childrens from '../assets/img/childrens.jpg'
//import Rating from '@mui/material/Rating';
//import StarIcon from '@mui/icons-material/Star';
//import Box from '@mui/material/Box';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { ChatRounded } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css'
import PeopleIcon from "@mui/icons-material/People";
import { blue } from '@mui/material/colors';
import { Button, Paper } from '@mui/material';
import { People } from '@mui/icons-material';

const Services = () => {
  const [activeText, setActiveText] = useState(null);

 // eslint-disable-next-line no-lone-blocks
 { /*const services = [
    {
      id: 1,
      img: cc,
      title: 'Connectivity and Communication',
      description: `Stay connected and communicate seamlessly with our innovative Connectivity and Communication solutions. Software Defined Network Infrastructure, Wireless and Mobility options, Network Performance Optimization, and Unified Communication with Voice and Video.`,
    },
    {
      id: 2,
      img: modern,
      title: 'Modern IT Infrastructure',
      description: `Modern IT Infrastructure ensures your business growth with Software Defined Infrastructure (SDI), virtualization, cloud solutions, and modular data centers.`,
    },
    {
      id: 3,
      img: cyber,
      title: 'Cyber Security',
      description: `Robust digital security strategies for threat analysis, including Network Security, Infrastructure Security, Application Security, and User Security.`,
    },
  ];*/}

  const newImages = [
    { id: 1, image: childrens , alt:'children'},
    { id: 2, image: church1 , alt:'church'},
    { id: 3, image: church2, alt:'church service' }
  ];
  

  const pastors = [
    { title: "Baptismal class", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQ_fdZB3DgTZznqq6A8qNkhvDjMdgms3HNg&s' },
    { title: "Night Vigil", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBTalK_4ThiCAIxkLW1SRnnERl3sVyDhnw&s'},
    { title: "V ENIS", image: '' },
  ];
  // eslint-disable-next-line no-lone-blocks
  {/*const handleTextToggle = (id) => {
    setActiveText(activeText === id ? null : id);
  };*/}

  return (
    <div className="w-full font-poppins">
      {/* SEO Meta Tags */}
      <head>
  <title>Church Support | Special Events | Online Services</title>
  <meta
    name="description"
    content="Providing exceptional church support, organizing special events, and enabling seamless online services tailored to your needs."
  />
  <meta
    name="keywords"
    content="Church Support, Special Events, Online Church Services, Community Events, Church Management"
  />
</head>


      {/* Hero Section */}
      <section className="relative w-full">
  <img
    src={image1}
    alt="Hero section - Church Services"
    className="w-full h-64 md:h-80 object-cover"
  />
  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-2xl text-white">
    Special Events
  </p>
</section>


      {/* Services Section */}
      {/*<section className="px-4 py-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Our IT Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Paper
              key={service.id}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleTextToggle(service.id)}
              component="article"
            >
              <img
                src={service.img}
                alt={`${service.title} - IT Service`}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${
                  activeText === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                {activeText === service.id && (
                  <p className="text-sm text-center px-4">{service.description}</p>
                )}
              </div>
            </Paper>
          ))}
        </div>
      </section>*/}

      {/* Structured Data (Schema.org) */}
      {/*<script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "IT Services",
          "serviceType": "Modern IT Infrastructure, Cyber Security, Connectivity and Communication",
          "provider": {
            "@type": "Organization",
            "name": "Manifold Computers",
          },
          "areaServed": "Global",
          "description": "We offer IT solutions, including Modern IT Infrastructure, Connectivity, and Cyber Security services.",
        })}
      </script>*/}

      <section className="my-12 px-6">
      <motion.div
        className="flex flex-col lg:flex-row gap-6 items-center"
        transition={{ type: "spring", stiffness: 300 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Carousel Section */}
        <motion.div className="w-full lg:w-2/3">
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            interval={3000}
            className="rounded-lg shadow-lg overflow-hidden rounded-br-[200px]"
          >
            {newImages.map(({ id, image, alt }) => (
              <div key={id} className="w-full h-96">
                <img
                  src={image}
                  alt={alt}
                  className="object-cover w-full h-full "
                />
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Placeholder for Additional Content */}
        <motion.div
      className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Paper elevation={3} className="p-6 rounded-lg shadow-md bg-white">
        <div className="flex flex-col items-center lg:items-start space-y-6">
          {/* Icon Wrapper */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full border bg-gray-100">
            <PeopleIcon className="text-primary" fontSize="large" />
          </div>

          {/* Text Content */}
          <h3 className="text-lg font-semibold">We're Here to Help</h3>
          <p className="text-gray-600">
            Need assistance? We're here to help with support, guidance, and
            resources. Reach out to us anytime.
          </p>

          {/* Call to Action */}
          <Button variant="contained" color="primary" sx={{backgroundColor:'#ec3237'}} aria-label="Contact us">
            Contact Us
          </Button>
        </div>
      </Paper>
    </motion.div>

   
      </motion.div>
    </section>

    <section
          className="px-6 py-16 bg-[#ec3237] text-white text-center"
          aria-labelledby="testimonials-heading"
        >
          {/* Header Section */}
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base uppercase tracking-wide font-semibold">
             Special event
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-snug my-6">
           Upcoming events{" "}
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

export default Services;
