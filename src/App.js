import "bootstrap/dist/css/bootstrap.min.css";

import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navBar/Navbar";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
