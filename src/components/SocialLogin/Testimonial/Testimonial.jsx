
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('revieww.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (

        <section className='my-20 mx-20'>
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="p-4 text-4xl font-semibold leadi text-center -mt-10">Testimonials</h1>
                <hr className="w-32  mx-auto mt-3 border-1 border-black" />
                <hr />
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}

                    >
                        <div>
                            <section className=" dark:bg-gray-800 dark:text-gray-100 -mt-20">

                                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                </svg>{review.details}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                </svg>
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                            <img src={review.img} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                            <p className="text-xl font-semibold leadi">{review.name}</p>
                                            <p className="text-sm uppercase">Aliquam illum</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>

    );
};

export default Testimonial;











// <div>
// <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
//     <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
//         <h1 className="p-4 text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
//     </div>
//     <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
//         <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
//             <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
//                 <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
//                         <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
//                         <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
//                     </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
//                         <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
//                         <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
//                     </svg>
//                 </p>
//             </div>
//             <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
//                 <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
//                 <p className="text-xl font-semibold leadi">Distinctio Animi</p>
//                 <p className="text-sm uppercase">Aliquam illum</p>
//             </div>
//         </div>
//     </div>
// </section>

// </div>
