import "./App.css";
import { MyNavbarcomp } from "./components/mynavbar/mynavbarcomp";
import { About } from "./pages/about/aboutcomp";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import BG from "./assets/bg1.png";
import Container from "react-bootstrap/Container";
const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbarcomp />
      <div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={BG}
          bgImageAlt="the dog"
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
};

export default App;
