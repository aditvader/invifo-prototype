import { FC, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Rollout } from "../model/RolloutModel";
import AppForm from "../../../../../customs/forms/AppForm";
import {
  FormDateField,
  FormSelectField,
  FormTextField,
} from "../../../../../customs/forms/FormField";
const rolloutValidation = yup.object().shape({
  rolloutName: yup.string().required("Rollout is required"),
  transportRequest: yup.string().required("Transport Request is required"),
});
type PartialRollout = Partial<Rollout>;
type Props = {
  rollout?: PartialRollout;
  onConfirmSave: (rollout: Rollout) => void;
};
const RolloutForm: FC<Props> = ({ rollout, onConfirmSave }) => {
  const [rolloutValue, setRolloutValue] = useState<Partial<Rollout>>({
    ID: 1,
    rolloutName: "",
    rolloutType: 1,
    rolloutTypeDesc: "Started",
    transportRequest: "",
    startDate: new Date(),
    endDate: new Date(),
    statusID: 1,
    statusDesc: "",
  });
  return (
    <AppForm
      initialValues={rolloutValue}
      validationSchema={rolloutValidation}
      onSubmit={async (values: Rollout) => {}}
    >
      <FormTextField name="rolloutName" label="Rollout Name" />
      <FormSelectField
        name="rolloutType"
        label="Rollout Type"
        options={[
          {
            label: "Financial Service",
            value: 1,
          },
        ]}
      />
      <FormTextField name="transportRequest" label="Transport Request" />
      <FormDateField name="startDate" label="Start Date" />
      <FormDateField name="endDate" label="End Date" />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <button
            style={{ marginTop: "10px" }}
            type="submit"
            className="btn btn-primary float-end"
          >
            Save
          </button>
        </div>
      </div>
    </AppForm>
  );
};

export default RolloutForm;
