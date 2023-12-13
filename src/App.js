import './App.css';
import Header from './components/Header';
import Whyus from './components/Whyus';
import Service from './components/Service';
import Process from './components/Process';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import Home from './components/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/BlogList" element={<BlogList />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Awards /> */}
      <Footer />
    </div>
  );
}

export default App;
