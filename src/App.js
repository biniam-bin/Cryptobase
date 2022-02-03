import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Topograrhy, Space } from "antd";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
             <Route exact path='/'>
                 <Homepage/>
             </Route>
             <Route exact path='/exchanges'>
                 <Exchanges/>
             </Route>
             <Route exact path='/cryptocurencies'>
                 <Cryptocurencies/>
             </Route>
             <Route exact path='/crypto/:coinId'>
                 <CryptoDetail/>
             </Route>
             <Route exact path='/news'>
                 <News/>
             </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
