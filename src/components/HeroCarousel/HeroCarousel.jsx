import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  const slides = [
    {
      title: "Fresh Smoothie & Summer Juice",
      subtitle: "100% Natural",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://i.ibb.co/2k5XK6T/smoothie-bottle.png",
      bg: "#e9f6fb",
    },
    {
      title: "Fruits & Vegetables",
      subtitle: "20% Off",
      desc: "Fresh and healthy vegetables everyday.",
      image: "https://i.ibb.co/5K3r4xP/vegetables.png",
      bg: "#f1f8e9",
    },
    {
      title: "Baked Products",
      subtitle: "15% Off",
      desc: "Freshly baked breads and pastries.",
      image: "https://i.ibb.co/J3F7G3z/bread.png",
      bg: "#fff1eb",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      loop
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{ backgroundColor: slide.bg }}
          >
            <div className="hero-text">
              <span className="subtitle">{slide.subtitle}</span>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <button>SHOP COLLECTION</button>
            </div>

            <div className="hero-image">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
