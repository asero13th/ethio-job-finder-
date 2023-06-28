import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer"
import Home from "./components/Home"
import JobDetail from "./components/JobDetail"
import About from "./components/About"
import Profile from "./components/Profile"
import PageNotFound from "./components/PageNotFound"
import NavBar from './components/NavBar';
import AddJobs from './components/AddJobs';
import AdminJobList from './components/AdminJobList';
import AdmnEdit from './components/AdmnEdit';

function App() {
  return (
    <div className="App">
       <Router>
        < NavBar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/about' exact Component={About} />
          <Route path='/admin/addjobs' exact Component={AddJobs}/>
          <Route path='/admin/joblists' exact Component={AdminJobList} />
          <Route path='/admin/edit/:id' exact Component={AdmnEdit} />
          <Route path='/user/:userId' Component={Profile} />
          <Route path='/product/:id' Component={JobDetail} />
          <Route path='/product/:id/:else' Component={PageNotFound} />
          <Route path='/:id'  Component={PageNotFound}/>
        </Routes>
        <Footer />
       </Router>
    </div>
  );
}

export default App;
