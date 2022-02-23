import { FC, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { PageAction } from "../../../../../_metronic/layout/core";
import { Rollout } from "../model/RolloutModel";
import CustomDataTable from "../../../../../customs/layout/CustomDataTable";
import ResponsiveEllipsis from "../../../../../customs/layout/ResponsiveEllipsis";
import { formatDate } from "../../../../../utils/utils";
import { Badge } from "react-bootstrap";
import RolloutForm from "./RolloutForm";

type Props = {
  history: any;
};
const RolloutList: FC<Props> = ({ history }, ref) => {
  const [rollout, setRollout] = useState<Partial<Rollout>>();
  const [rollouts, setRoullouts] = useState<Rollout[]>([
    {
      ID: 1,
      rolloutName: "Bikim Company A",
      rolloutType: 1,
      rolloutTypeDesc: "Financial Service",
      transportRequest: "TR373383",
      startDate: new Date(),
      endDate: new Date(),
      statusID: 1,
      statusDesc: "Started",
    },
    {
      ID: 2,
      rolloutName: "Bikim Company B",
      rolloutType: 1,
      rolloutTypeDesc: "Financial Service",
      transportRequest: "TR373383",
      startDate: new Date(),
      endDate: new Date(),
      statusID: 2,
      statusDesc: "In Progress",
    },
    {
      ID: 3,
      rolloutName: "Bikim Company C",
      rolloutType: 1,
      rolloutTypeDesc: "Financial Service",
      transportRequest: "TR373383",
      startDate: new Date(),
      endDate: new Date(),
      statusID: 3,
      statusDesc: "Setup Complete",
    },
    {
      ID: 4,
      rolloutName: "Bikim Company C",
      rolloutType: 1,
      rolloutTypeDesc: "Financial Service",
      transportRequest: "TR373383",
      startDate: new Date(),
      endDate: new Date(),
      statusID: 4,
      statusDesc: "Posted to SAP",
    },
  ]);
  const [showRolloutForm, setShowRolloutForm] = useState(false);
  useEffect(() => {}, []);

  return (
    <>
      <PageAction
        actionButtons={[
          {
            title: "New Company Rollout",
            color: "primary",
            onClick: () => {
              setShowRolloutForm(true);
            },
          },
        ]}
      />
      <CustomDataTable
        data={rollouts}
        columns={[
          {
            header: "Rollout ID",
            field: "ID",
            body: null,
            sortable: true,
            filter: true,
          },
          {
            header: "Roll Name",
            field: "rolloutName",
            body: (rolloutData: Rollout) => (
              <>
                <ResponsiveEllipsis
                  text={rolloutData.rolloutName}
                  maxLine="1"
                />
              </>
            ),
            sortable: true,
            filter: true,
          },
          {
            header: "Rollout Type",
            field: "rolloutTypeDesc",
            body: (rolloutData: Rollout) => (
              <>
                <ResponsiveEllipsis
                  text={rolloutData.rolloutTypeDesc}
                  maxLine="1"
                />
              </>
            ),
            sortable: true,
            filter: true,
          },
          {
            header: "Status",
            field: "statusID",
            body: (rolloutData: Rollout) => (
              <Badge
                bg={
                  rolloutData.statusID === 1
                    ? "primary"
                    : rolloutData.statusID === 2
                    ? "warning"
                    : rolloutData.statusID === 3
                    ? "info"
                    : rolloutData.statusID === 4
                    ? "success"
                    : "default"
                }
              >
                {rolloutData.statusDesc}
              </Badge>
            ),
            sortable: true,
            filter: true,
          },
          {
            header: "Transport Request",
            field: "transportRequest",
            body: (rolloutData: Rollout) => (
              <>
                <ResponsiveEllipsis
                  text={rolloutData.transportRequest}
                  maxLine="1"
                />
              </>
            ),
            sortable: true,
            filter: true,
          },
          {
            header: "Start Date",
            field: "startDate",
            body: (rolloutData: Rollout) => formatDate(rolloutData.startDate),
            sortable: true,
            filter: true,
          },
          {
            header: "End Date",
            field: "endDate",
            body: (rolloutData: Rollout) => formatDate(rolloutData.endDate),
            sortable: true,
            filter: true,
          },
          {
            header: "Transport Request",
            field: "transportRequest",
            body: (rolloutData: Rollout) => (
              <>
                <ResponsiveEllipsis
                  text={rolloutData.transportRequest}
                  maxLine="1"
                />
              </>
            ),
            sortable: true,
            filter: true,
          },
          {
            header: "Actions",
            body: (rolloutData: Rollout) => (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    setShowRolloutForm(true);
                    setRollout(rolloutData);
                  }}
                  className="btn btn-icon btn-primary btn-circle btn-sm mx-1"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    history.push("/rollout/rollout-process");
                  }}
                  className="btn btn-icon btn-success btn-circle btn-sm mx-1"
                >
                  <i className="fas fa-list-alt"></i>
                </button>
              </>
            ),
            sortable: false,
          },
        ]}
      />
      <Dialog
        header="Company Rollout Form"
        visible={showRolloutForm}
        style={{ width: "50vw" }}
        onHide={() => {
          setShowRolloutForm(false);
        }}
      >
        <RolloutForm onConfirmSave={(rollout: Rollout) => {}} />
      </Dialog>
    </>
  );
};

export default RolloutList;
