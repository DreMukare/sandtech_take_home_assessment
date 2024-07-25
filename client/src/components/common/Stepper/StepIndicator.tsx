import { IStepperSteps } from "../../../utils/types/stepper";

const StepIndicator = (props: {
  stepperSteps: IStepperSteps[];
  stepNumber: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { stepNumber, setStep, stepperSteps } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1em",
      }}
    >
      {stepperSteps.map((step, idx) => {
        return (
          <button
            data-testid="step-indicator"
            key={idx}
            style={{
              width: "1em",
              height: "1em",
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                step.id === stepNumber ? "lightblue" : "rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
            onClick={() => setStep(idx)}
          />
        );
      })}
    </div>
  );
};

export default StepIndicator;
