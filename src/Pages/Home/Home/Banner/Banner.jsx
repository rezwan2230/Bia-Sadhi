// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg1 from '../../../../assets/banner1.jpg'
import bannerImg2 from '../../../../assets/banner2.jpg'
import bannerImg3 from '../../../../assets/banner4.jpg'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className="h-[80vh] w-full" src={bannerImg1} alt="" />
                        <div className="absolute z-3 inset-0 bg-black bg-opacity-60"></div>
                    </div>
                    <h2 className="text-center absolute z-10 text-white text-8xl md:text-2xl md:top-[33%] md:left-[10%] w-[500px] top-[36%]"><span className="title text-2xl lg:text-[70px] md:text-[50px]">Unveil Romance, Seeking Love</span>.
                    <p className="text-lg mt-2">Your journey to a heart's embrace begins here and now...</p> 
                    </h2>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img className="h-[80vh] w-full" src={bannerImg2} alt="" />
                        <div className="absolute z-3 inset-0 bg-black bg-opacity-60"></div>
                    </div>
                    <h2 className="text-center absolute z-10 text-white  text-8xl md:text-2xl md:top-[33%] md:left-[10%] w-[500px] top-[36%]"><span className="title text-2xl lg:text-[70px] md:text-[50px]">Unveil Romance, Seeking Love</span>.
                    <p className="text-lg mt-2">Your journey to a heart's embrace begins here and now...</p> 
                    </h2>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img className="h-[80vh] w-full" src={bannerImg3} alt="" />
                        <div className="absolute z-3 inset-0 bg-black bg-opacity-60"></div>
                    </div>
                    <h2 className="text-center absolute z-10 text-white text-8xl md:text-2xl md:top-[33%] md:left-[10%] w-[500px] top-[36%]"><span className="title text-2xl lg:text-[70px] md:text-[50px]">Unveil Romance, Seeking Love</span>.
                    <p className="text-lg mt-2">Your journey to a heart's embrace begins here and now...</p> 
                    </h2>
                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default Banner;