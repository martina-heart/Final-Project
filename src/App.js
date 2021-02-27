import "./App.css";
import MyMenu from "./Menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Menu/Header/header";
import { SlideShow } from "./Menu/Header/slideshow";

function App() {
  return (
    <>
      <MyMenu />
      <Header />
      <SlideShow />
    </>
  );
}

export default App;
