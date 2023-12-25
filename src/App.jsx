import Header from "./components/Header";

import Banner from "./sections/Banner";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="h-[2000px]">
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
