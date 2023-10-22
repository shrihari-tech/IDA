import './App.css';
import Header from './components/Header';
import Whyus from './components/Whyus';
import Service from './components/Service';
import Process from './components/Process';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Header />
      <Whyus />
      <Service />
      <Process />
      <Projects />
    </div>
  );
}

export default App;
