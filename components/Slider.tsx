import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/constant/Team";
// import { FetchCenter } from "@/hooks/Centers/useCenters";

interface Props {
  title: string;
}

const Slider = ({ title }: Props) => {
  return (
    <div className="flex justify-center items-center w-full px-4 py-8 tajwal">
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <h1 className="text-purple-color text-center font-black text-3xl mb-6">
          {title}
        </h1>
        <Swiper
          style={
            {
              "--swiper-pagination-color": "#035CB0",
              "--swiper-pagination-bullet-inactive-color": "#C0C0C0",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "20px",
              "--swiper-pagination-bullet-horizontal-gap": "10px",
            } as React.CSSProperties
          }
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper w-full"
        >
          {team?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center text-center"
            >
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl duration-200 w-full sm:w-auto mb-2">
                <div className="relative w-full h-48 sm:h-60 rounded-t-lg overflow-hidden">
                  <Image
                    src={item.img ?? ""}
                    alt="Center Image"
                    width={500}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-4 leading-normal w-full">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {item.title}
                  </h5>

                  <Link
                    href={``}
                    title=" "
                    className="bg-purple-color btn-border rounded-full text-white font-bold px-5 py-1 w-56 mt-4 text-center"
                  >
                    عرض اعضاء الفريق
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
