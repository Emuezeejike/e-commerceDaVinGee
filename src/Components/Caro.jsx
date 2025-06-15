import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CaroImage2 from "../assets/images/n7.png";
import CaroImage3 from "../assets/images/n12.png";
import CaroImage4 from "../assets/images/n21.png";
import CaroImage5 from "../assets/images/n25.png";
import "../../src/index.css";

const slides = [
  {
    img: CaroImage2,
    title: "Moccasin",
    year: "Maranini 1998",
    desc: "With the finest of touch and the purest of materials comes the most sorted for designs.",
  },
  {
    img: CaroImage3,
    title: "Brogue",
    year: "British 1994",
    desc: "That gentleman style that suits your awesome personality awaits you.",
  },
  {
    img: CaroImage4,
    title: "Chelsea Boot",
    year: "Jantamata 1999",
    desc: "Pulling up in a family reunion and winning the best dressed with this finest touch.",
  },
  {
    img: CaroImage5,
    title: "Straw Hat",
    year: "Pintiny 1947",
    desc: "Ever considered to be the ladies man just with the immeasurable way you step out.",
  },
];

const SLIDE_INTERVAL = 4000; // 4 seconds

const Caro = () => {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const slide = scrollRef.current.children[current];
      if (slide) {
        slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [current]);

  return (
    <div className="bg-gray-200">
      <h2 className="text-black text-center font-berkshire text-5xl font-bold m-8 pt-3">
        Always a Step Ahead
      </h2>
      <div className="bg-gray-200 flex justify-center items-center m-auto p-8">
        <div className="w-full max-w-6xl mx-auto p-4">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 scrollbar-thin scrollbar-thumb-gray-400 pb-4 scroll-smooth"
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-[68rem] bg-white rounded-4xl shadow-lg flex flex-col md:flex-row items-center gap-8"
                style={{ maxWidth: "100vw" }}
              >
                <img
                  loading="lazy"
                  className="rounded-4xl w-full md:w-72 h-56 object-cover"
                  src={slide.img}
                  alt={slide.title}
                />
                <div className="m-8 w-full md:w-auto">
                  <p className="text-sm">{slide.year}</p>
                  <h2 className="text-3xl font-bold font-pacifico">{slide.title}</h2>
                  <p className="text-justify">{slide.desc}</p>
                  <Link
                    to={"/products"}
                    className="bg-gray-300 text-black px-12 rounded-2xl text-sm hover:bg-gray-500 mt-4 inline-block"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caro;