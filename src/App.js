import logo from "./logo.svg";
import { Opening, HideShowFunction } from "./Components/body";
import { ProjectOne } from "./Components/projectOne/ProjectOne";
import { ProjectTwo } from "./Components/projectTwo/ProjectTwo";
import { ProjectThree } from "./Components/projectThree/ProjectThree";
import { ProjectFour } from "./Components/projectFour/ProjectFour";
import { ProjectFive } from "./Components/projectFive/ProjectFive";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Opening />
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
      {/* <ProjectFive /> */}
      <Footer />
    </div>
  );
}

export default App;
