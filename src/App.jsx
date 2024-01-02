import Header from "./components/Header";

import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Header />
      <main className="h-[2000px]">
        <Banner />
        <Benefits />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
