import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewSlide from "./ReviewSlide";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mx-4">
      <div
        className="lg:mt-16 md:mt-12 mt-8 max-w-screen-xl mx-auto"
        data-aos="fade-up"
      >
        <div>
          <h2 className="text-center lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-3">
            My Client <span className="text-[#fc3a40]">Feedback</span>
          </h2>
          <p className="text-center lg:w-1/2 md:w-2/3 lg:text-lg text-sm mx-auto lg:mb-14 mb-10">
            I value your satisfaction more than money. My primary goal is client
            satisfaction. I strive to create lasting relationships with your
            needs and happiness in mind
          </p>
        </div>
        <div>
          <ReviewSlide reviews={reviews}></ReviewSlide>
        </div>
      </div>
    </div>
  );
};

export default Review;
