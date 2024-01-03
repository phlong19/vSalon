import Header from "./components/Header";

import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";
import MobileApp from "./sections/MobileApp";
import Services from "./sections/Services";
import Trial from "./sections/Trial";

function App() {
  return (
    <>
      <Header />
      <main className="h-[4000px]">
        <Banner />
        <Benefits />
        <Services />
        <Trial />
        <MobileApp />
      </main>
      <Footer />
    </>
  );
}

export default App;
