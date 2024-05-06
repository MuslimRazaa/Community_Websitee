import HomePage from "./pages/home/home";
import "./assets/styleSheet/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Detail from "./pages/Detail page/Detail";
import DetailTwo from "./pages/Detail page Two/DetailTwo";
import Sitemap from "./components/Sitemap";
import Popup1 from "./components/Popup1";




function App() {
  return (
    <>
    <HomePage/>
    <Detail/>
    <DetailTwo/>
    <Popup1/>
    <Sitemap/>
    </>
  );
}

export default App;
