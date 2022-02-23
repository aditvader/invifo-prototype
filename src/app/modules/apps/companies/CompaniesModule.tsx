import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CompaniesPage from "../../../pages/modules/companies/CompaniesPage";

function CompaniesModule(props) {
  return (
    <Switch>
      <Redirect exact={true} from="/crm" to="/crm/leads" />
      <Route path="/companies" component={CompaniesPage} />
      <Redirect to="error/404" />
    </Switch>
  );
}

export default CompaniesModule;
