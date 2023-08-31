// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Omotoke Okeyemi",
    position: "Colleague",
    message:
      "Having collaborated with Dayo on some projects, I can confidently say he's a true virtuoso of web development. His knack for turning abstract ideas into tangible digital experiences never ceases to amaze me!!",
  },
  {
    image: "/t-avt-3.png",
    name: "Quentin Coldwater",
    position: "Customer",
    message:
      "Ekundayo has a unique blend of creativity and technical prowess. We gave him a vision, and he returned with a site that exceeded our wildest expectations. It's not just a website; it's a masterpiece.",
  },
  {
    image: "/t-avt-2.png",
    name: "Blair Waldorf",
    position: "Customer",
    message:
      "Dayo's passion for web development shines through in his work. Our website is not just user-friendly, but it also tells our brand's story in a compelling way. He's truly a gem to work with!",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

//icons
import { FaQuoteLeft } from "react-icons/fa";

// next image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[480px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
