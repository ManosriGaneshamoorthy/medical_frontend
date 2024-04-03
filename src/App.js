import React from "react";
import { Route, Switch } from "react-router";
import SinginForm from "./components/pages/SinginForm";
import SignupForm from "./components/pages/SignUp";
import './index.css';
import Dashboard from "./components/pages/Dashboard";
import StaffPage from "./components/pages/StaffPage";
import BranchesPage from "./components/pages/BranchesPage";
import ApporitmentPage from "./components/pages/ApporitmentPage";
import PastiontPage from "./components/pages/PastiontPage";
import DoctorPage from "./components/pages/DoctorPage";


function App() {
  return (
   
    <Switch>
      <Route exact path="/">
          <SinginForm/>
      </Route>
      <Route exact path="/signup">
          <SignupForm/>
      </Route>
      <Route exact path="/dashboard">
          <Dashboard/>
      </Route>
      <Route exact path="/doctors">
        <DoctorPage/>
      </Route>
      <Route exact path="/staff">
          <StaffPage/>
      </Route>
      <Route exact path="/branches">
        <BranchesPage/>
      </Route>
      <Route exact path="/apporitment">
          <ApporitmentPage/>
      </Route>
      <Route exact path="/patients">
        <PastiontPage/>
      </Route>
      
    </Switch>
   
  );
}

export default App;
