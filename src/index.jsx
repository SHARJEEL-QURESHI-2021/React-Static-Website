import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navs from './Comp/Navbar';
import Header from './Comp/Header';
import Card from './Comp/Card';
import Web from './Comp/Web';
import Footer from './Comp/Footer';

ReactDOM.render(
  <>
    <Navs />
    <Header />
    <div id="display">
      <Card /><Card /><Card /><Card />
      <Card /><Card /><Card /><Card />
      <Card /><Card /><Card /><Card />
      <Card /><Card /><Card /><Card />
      <Card /><Card />
    </div>
    <Web />
    <div id="displays">
      <Footer />
    </div>
  </>, document.getElementById('root'));


