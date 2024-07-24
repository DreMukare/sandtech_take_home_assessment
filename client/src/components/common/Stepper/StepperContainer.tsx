import { Dispatch, SetStateAction } from "react";
import StepButton from "./StepButton";
import StepperStep from "./StepperStep";

const StepperContainer = (props: {
  stepperSteps: {
    key: string;
    id: number;
    title: string;
    component: React.ReactNode;
  }[];
  stepNumber: number;
  setStepNumber: Dispatch<SetStateAction<number>>;
}) => {
  const { stepperSteps, stepNumber, setStepNumber } = props;
  return (
    <div
      style={{
        display: "flex",
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
    </div>
  );
};

export default StepperContainer;
