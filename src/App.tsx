import { Navbar } from "./components";
import { Hero, About, Education } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
    </div>
  );
}

export default App;
