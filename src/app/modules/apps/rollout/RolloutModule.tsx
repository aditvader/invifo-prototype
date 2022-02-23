import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RolloutPage from "../../../pages/modules/rollout/RolloutPage";
import RolloutProcessPage from "../../../pages/modules/rollout/RolloutProcessPage";

function RolloutModule(props) {
  return (
    <Switch>
      <Redirect exact={true} from="/rollout" to="/rollout/rollout-list" />
      <Route path="/rollout/rollout-list" component={RolloutPage} />
      <Route path="/rollout/rollout-process" component={RolloutProcessPage} />
      <Redirect to="error/404" />
    </Switch>
  );
}

export default RolloutModule;
