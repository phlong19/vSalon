import Header from "./components/Header";

import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="h-[2000px]">
        <Banner />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

export default App;
