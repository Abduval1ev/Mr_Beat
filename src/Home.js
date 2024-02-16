import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Problems from "./Pages/Problems";
import Reviews from "./Pages/Reviews";
import Service from "./Pages/Service";
import Indexx from "./Pages/Indexx";


function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route element={<Indexx />} path={'/'} />
          <Route element={<About />} path={'/about'} />
          <Route element={<Contacts />} path={'/contacts'} />
          <Route element={<Problems />} path={'/problems'} />
          <Route element={<Reviews />} path={'/reviews'} />
          <Route element={<Service />} path={'/service'} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default Home;
