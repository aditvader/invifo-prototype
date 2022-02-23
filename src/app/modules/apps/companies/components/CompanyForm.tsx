import { FC, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import * as yup from "yup";
import Swal from "sweetalert2";
import AppForm from "../../../../../customs/forms/AppForm";
import { FormTextField } from "../../../../../customs/forms/FormField";
import { CompanyModel } from "../model/CompanyModel";
const companyValidation = yup.object().shape({
  companyName: yup.string().required("Company is required"),
});
type PartialCompany = Partial<CompanyModel>;
type Props = {
  company?: PartialCompany;
  onConfirmSave: (company: CompanyModel) => void;
};
const CompanyForm: FC<Props> = ({ company, onConfirmSave }) => {
  const [companyValue, setCompanyValue] = useState<Partial<CompanyModel>>({
    ID: 1,
    companyCode: 1000,
    companyName: "Tes Company A",
    companyName2: "Tes Company A",
    street: "Jl. Kebayoran Baru",
    poBox: "28282",
    postalCode: "15154",
    city: "Jakarta Selatan",
    country: "IN",
    languageKey: "EN",
    currency: "INR",
  });
  return (
    <AppForm
      initialValues={companyValue}
      validationSchema={companyValidation}
      onSubmit={async (values: CompanyModel) => {
        onConfirmSave(values);
      }}
    >
      <h3>Company Form</h3>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <FormTextField name="companyName" label="Company Name" />
          <FormTextField name="companyName2" label="Name of Company 2" />
          <FormTextField name="languageKey" label="Language" />
          <FormTextField name="currency" label="Currency" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <FormTextField name="street" label="Street" />
          <FormTextField name="poBox" label="PO BOX" />
          <FormTextField name="city" label="City" />
          <FormTextField name="country" label="Country" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <button
            style={{ marginTop: "10px" }}
            type="submit"
            className="btn btn-success float-end"
          >
            Save
          </button>
        </div>
      </div>
    </AppForm>
  );
};

export default CompanyForm;
