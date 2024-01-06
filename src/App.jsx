import Header from "./components/Header";

import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Customer from "./sections/Customer";
import Footer from "./sections/Footer";
import MobileApp from "./sections/MobileApp";
import Services from "./sections/Services";
import Subcribe from "./sections/Subcribe";
import Testimonial from "./sections/Testimonial";
import Trial from "./sections/Trial";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Benefits />
        <Services />
        <Trial />
        <MobileApp />
        <Testimonial />
        <Customer />
        <Subcribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
