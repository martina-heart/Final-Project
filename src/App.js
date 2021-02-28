import "./App.css";
import MyMenu from "./Menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { SlideShow } from "./Components/Header/slideshow";

function App() {
  return (
    <>
      <MyMenu />
      <Header />
      <SlideShow />
      <Footer />
    </>
  );
}

export default App;
