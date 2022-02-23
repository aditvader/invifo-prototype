import { FC, useState } from "react";
import AppWrapper from "../../../../customs/layout/AppWrapper";
import { PageTitle } from "../../../../_metronic/layout/core";
import CompanyForm from "../../../modules/apps/companies/components/CompanyForm";
import RolloutProcess from "../../../modules/apps/rollout/components/RolloutProcess";

type Props = {
  history: any;
};
const RolloutProcessPage: FC<Props> = ({ history }) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
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
          {
            title: "Company Rollout List",
            path: "/rollout/rollout-list",
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
        Company Rollout Process
      </PageTitle>
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <RolloutProcess
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          {activeStep === 0 ? (
            <CompanyForm
              onConfirmSave={() => {
                handleNext();
              }}
            />
          ) : (
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h1>Application Form</h1>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <button
                      type="button"
                      className="btn btn-success mt-3 float-end"
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mt-3 me-3 float-end"
                      onClick={() => {
                        handleBack();
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppWrapper>
  );
};

export default RolloutProcessPage;
