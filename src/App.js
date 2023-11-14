import logo from "./logo.svg";
import {
  Opening,
  ProjectOne,
  ProjectTwo,
  HideShowFunction,
} from "./Components/body";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Opening />
      <ProjectOne />
      <Footer />
    </div>
  );
}

export default App;
