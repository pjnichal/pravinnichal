import "./App.css";
import { MyCarousal } from "./components/mycarousal/mycarousal";
import { MyNavbarcomp } from "./components/mynavbar/mynavbarcomp";

const App = () => {
  return (
    <div className="App">
      <MyNavbarcomp />
      <MyCarousal />
    </div>
  );
};

export default App;
