import { FC } from "react";
import AppWrapper from "../../../../customs/layout/AppWrapper";
import { PageTitle } from "../../../../_metronic/layout/core";
import RolloutList from "../../../modules/apps/rollout/components/RolloutList";

type Props = {
  history: any;
};
const RolloutPage: FC<Props> = ({ history }) => {
  return (
    <AppWrapper cardStyle={{ minHeight: "600px" }} showHeader={false}>
      <PageTitle
        breadcrumbs={[
          {
            title: "Menu",
            path: "/menu",
            isSeparator: false,
            isActive: false,
          },
          {
            title: "",
            path: "",
            isSeparator: true,
            isActive: false,
          },
        ]}
      >
        Company Rollout List
      </PageTitle>
      <RolloutList history={history} />
    </AppWrapper>
  );
};

export default RolloutPage;
