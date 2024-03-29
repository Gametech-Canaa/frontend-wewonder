import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import ClassForm from "./pages/ClassForm";
import SignUp from "./pages/SignUp";
import MainApp from "./pages/MainApp";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />

      <Route path="/give-classes" component={ClassForm} />

      <Route path="/register" component={SignUp} />
      <Route path="/main-app" component={MainApp} />

      <Route path="/groups" component={TeacherList} />

      <Route path="/profile" component={MainApp} />
      <Route path="/achivements" component={SignUp} />
    </BrowserRouter>
  );
}

export default Routes;
