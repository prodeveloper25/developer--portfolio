import Aos from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../../Contact/Contact";
import Services from "../../Services/Services";
import About from "../About/About";
import ContactStatus from "../ContactStatus/ContactStatus";
import Expertise from "../Expertise/Expertise";
import Review from "../Review/Review";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <Helmet>
        <title>Home - Asratul Hasan Nahid</title>
      </Helmet>
      <About></About>
      <Review></Review>
      <ContactStatus></ContactStatus>
      <Expertise></Expertise>
      <Services></Services>
      <Statistics></Statistics>
      <Contact></Contact>
    </>
  );
};

export default Home;
