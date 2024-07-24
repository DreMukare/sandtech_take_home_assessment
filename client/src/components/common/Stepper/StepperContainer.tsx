import { Dispatch, SetStateAction } from "react";
import StepButton from "./StepButton";
import StepperStep from "./StepperStep";
import { IStepperSteps } from "../../../utils/types/stepper";
import StepIndicator from "./StepIndicator";

const StepperContainer = (props: {
  stepperSteps: IStepperSteps[];
  stepNumber: number;
  setStepNumber: Dispatch<SetStateAction<number>>;
}) => {
  const { stepperSteps, stepNumber, setStepNumber } = props;
  return (
    <div
      style={{
        display: "flex",
        gap: "2em",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
          width: "90%",
        }}
      >
        <StepButton
          currentStep={stepNumber}
          setCurrentStep={setStepNumber}
          decrement
        />
        <StepperStep
          content={
            stepperSteps.find((step) => step.id === stepNumber)?.component
          }
        />

        <StepButton currentStep={stepNumber} setCurrentStep={setStepNumber} />
      </div>
      <StepIndicator
        stepNumber={stepNumber}
        setStep={setStepNumber}
        stepperSteps={stepperSteps}
      />
    </div>
  );
};

export default StepperContainer;
