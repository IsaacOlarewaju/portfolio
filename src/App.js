import logo from "./logo.svg";
import { Opening, HideShowFunction } from "./Components/body";
import { ProjectOne } from "./Components/projectOne/ProjectOne";
import { ProjectTwo } from "./Components/projectTwo/ProjectTwo";
import { ProjectThree } from "./Components/projectThree/ProjectThree";
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
      <Footer />
    </div>
  );
}

export default App;
