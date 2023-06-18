import { Navbar, Socials } from "./components";
import { Hero, About, Education, Experience, Contact } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Socials />
      <Contact />
    </div>
  );
}

export default App;
