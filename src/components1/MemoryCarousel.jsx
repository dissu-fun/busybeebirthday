import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MemoryCarousel() {
  const images = ["/images/mem1.jpg", "/images/mem2.jpg"];

  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt="" className="rounded-xl w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
