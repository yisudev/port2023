import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import Projects from "./components/proyects/Proyects";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="body">
      <Presentation/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Header/>
    </div>
  );
}

export default App;
