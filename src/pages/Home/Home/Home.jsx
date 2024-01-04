import Contact from "../../Contact/Contact";
import Services from "../../Services/Services";
import About from "../About/About";
import ContactStatus from "../ContactStatus/ContactStatus";
import Expertise from "../Expertise/Expertise";
import Review from "../Review/Review";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  return (
    <div className="mx-4">
      <About></About>
      <Review></Review>
      <ContactStatus></ContactStatus>
      <Expertise></Expertise>
      <Services></Services>
      <Statistics></Statistics>
      <Contact></Contact>
    </div>
  );
};

export default Home;
