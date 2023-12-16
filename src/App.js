import './App.css';
import BlogList from './components/BlogList';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/BlogList" element={<BlogList />}></Route>
          <Route exact path="/About" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Awards /> */}
    </div>
  );
}

export default App;
