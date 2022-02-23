import React, { FC } from "react";
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
type Props = {
  activeStep: number;
  setActiveStep: any;
};
const RolloutProcess: FC<Props> = ({ activeStep, setActiveStep }) => {
  const steps = [
    {
      label: "Company",
      description: `Define Your Company`,
    },
    {
      label: "Controlling Area",
      description: "Define Your Controlling Area",
    },
    {
      label: "Plant",
      description: `Define Your Plant`,
    },
    {
      label: "Purchasing Organization",
      description: `Define Your Purchasing Organization`,
    },
    {
      label: "Storage Location",
      description: `Define Your Storage Location`,
    },
    {
      label: "House Bank",
      description: `Define Your House Bank`,
    },
  ];

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel>
            <h3 className="m-0">{step.label}</h3>
          </StepLabel>
          <StepContent>
            <Typography>{step.description}</Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default RolloutProcess;
