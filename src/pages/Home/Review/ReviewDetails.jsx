import { useState } from "react";

const ReviewDetails = ({ review }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleShowAndHideDetails = () => {
    if (!showDetails) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  };
  return (
    <p className="mt-3 mb-2 text-white">
      {showDetails ? review.details : review.details.slice(0, 85)}
      <button
        onClick={handleShowAndHideDetails}
        className="text-[#FFB23F] ml-1"
      >
        {showDetails ? "Less More" : "Read More..."}
      </button>
    </p>
  );
};

export default ReviewDetails;
