import { Navbar } from "./components";
import { Hero, About, Education, Experience } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
