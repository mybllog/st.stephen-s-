import React from "react";

const LogoMarquee = () => {
  const logos = [
    {
      text:'Love God Love men',
      alt: "Item 1",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/cisco.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 2",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/huawei.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 3",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/lenovo.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 4",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/hpe-1.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 5",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/hpe.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 6",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/ribbon.png",
    },
  ];

  return (
    <div className="overflow-hidden flex justify-start items-center  h-[100px] bg-[#ec3237] shadow-sm">
      <div className="flex animate-marquee space-x-6">
        {logos.map((logo, index) => (
          <div key={index} className="">
            <div className="">
             <p className="  text-xl text-white">{logo.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
