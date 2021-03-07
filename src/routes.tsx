import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
import LoginPage from "./pages/LoginPage"

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes/:id" component={TeacherForm} />
      <Route path="/login" component={LoginPage}/>
    </BrowserRouter>
  );
}

export default Routes;
