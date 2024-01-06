import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Scrollbar, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="lg:mt-16 md:mt-12 mt-8">
      <div>
        <h2 className="text-center lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-3">
          My Client <span className="text-[#fc3a40]">Feedback</span>
        </h2>
        <p className="text-center lg:w-1/2 md:w-2/3 lg:text-lg text-sm mx-auto lg:mb-14 mb-10">
          I value your satisfaction more than money. My primary goal is client
          satisfaction. I strive to create lasting relationships with your needs
          and happiness in mind
        </p>
      </div>
      <div>
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
                <p className="mt-3 mb-2 text-white">{review.details}</p>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={review.rating}
                  readOnly
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
