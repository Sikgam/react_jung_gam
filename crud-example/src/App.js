import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Board from './components/Board';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Calendar from './components/Calendar';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/board"} element={<Board />}/>
        <Route path={"/calendar"} element={<Calendar />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
