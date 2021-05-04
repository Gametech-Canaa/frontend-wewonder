import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import ClassForm from "./pages/ClassForm";
import SignUp from "./pages/SignUp";
import MainApp from "./pages/MainApp";
import Profile from "./pages/Profile";
import SomeoneProfile from "./pages/SomeoneProfile";
import Terms from "./pages/Terms";
import PaginaGrupo from "./pages/PaginaGrupo";
import Achivements from "./pages/Achivments";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />

      <Route path="/give-classes" component={ClassForm} />

      <Route path="/register" component={SignUp} />
      <Route path="/main-app" component={MainApp} />

      <Route path="/groups" component={TeacherList} />

      <Route path="/profile/:id" component={Profile} />
      <Route path="/group/someone-profile/:id" component={SomeoneProfile} />

      <Route path="/achivements" component={Achivements} />

      <Route path="/terms-conditions" component={Terms} />
      <Route path="/group/:id" exact component={PaginaGrupo} />
    </BrowserRouter>
  );
}

export default Routes;
