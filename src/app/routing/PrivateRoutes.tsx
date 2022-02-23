import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FallbackView } from "../../_metronic/partials";

import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import Menu from "../pages/Menu/Menu";

export function PrivateRoutes() {
  const CompaniesModule = lazy(
    () => import("../modules/apps/companies/CompaniesModule")
  );
  const RolloutModule = lazy(
    () => import("../modules/apps/rollout/RolloutModule")
  );

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path="/dashboard" component={DashboardWrapper} />
        <Route path="/menu" component={Menu} />
        <Route path="/companies" component={CompaniesModule} />
        <Route path="/rollout" component={RolloutModule} />
        <Redirect from="/auth" to="/menu" />
        <Redirect exact from="/" to="/menu" />
        <Redirect to="error/404" />
      </Switch>
    </Suspense>
  );
}
