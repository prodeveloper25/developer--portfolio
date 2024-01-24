import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewDetails from "./ReviewDetails";

const ReviewSlide = ({ reviews }) => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={false}
      grabCursor={true}
      breakpoints={{
        769: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      }}
      modules={[Scrollbar, Navigation]}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="mr-2 rounded-bl-3xl rounded-tl-3xl rounded-br-3xl bg-[#14a800] lg:px-4 md:px-8 px-4 py-10">
            <div className="flex items-center gap-3">
              <img
                className="rounded-full border-2 border-[#fc3a40] w-20 h-20"
                src={review.image}
                alt=""
              />
              <h2 className="text-white">
                {review.name} <br />{" "}
                <span className="text-[#fc3a40]">{review.country}</span>
              </h2>
            </div>
            <ReviewDetails review={review}></ReviewDetails>
            <Rating style={{ maxWidth: 130 }} value={review.rating} readOnly />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlide;
