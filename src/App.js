import logo from "./logo.svg";
import {
  Opening,
  ProjectOne,
  ProjectTwo,
  Footer,
  HideShowFunction,
} from "./Components/body";
import { NavBar } from "./Components/NavBar";
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
