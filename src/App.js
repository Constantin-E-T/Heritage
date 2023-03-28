import React, { Component} from 'react';
import Navbar from './components/Navbar';
import TopHeader from './components/TopHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/AboutUs';
import Services from './components/Services';
import InvoicePage from './components/InvoicePage';
import Team from './components/Team';
import Footer from './components/Footer';
import MyChatbot from './components/Chatbot/Chatbot';


class App extends Component {
  render() {
    return (
    <Router>
        
       <div className="App">
        <MyChatbot />
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} /> 
          <Route path="/about" Component={About}/>
          <Route path="/services" Component={Services}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/team" Component={Team}/>
          <Route path='/invoice' Component={InvoicePage}/>
        </Routes> 
        <Footer />
       </div>
        
    </Router>
    );
  }
}

export default App;
