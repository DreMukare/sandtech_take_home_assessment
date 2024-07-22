import { useState } from "react";
import StepButton from "../common/Stepper/StepButton";
import StepperContainer from "../common/Stepper/StepperContainer";
import StepperStep from "../common/Stepper/StepperStep";
import WeatherForecast from "../common/Weather/WeatherForecast";

const Stepper = () => {
  const [stepNumber, setStepNumber] = useState<number>(1);

  const stepperSteps = [
    {
      key: "step1",
      id: 0,
      title: "Step 1",
      component: <p>Step 1</p>,
    },
    {
      key: "step2",
      id: 1,
      title: "Step 2",
      component: <WeatherForecast />,
    },
    {
      key: "step3",
      id: 2,
      title: "Step 3",
      component: <p>Step 3</p>,
    },
  ];

  return (
    <div>
      <div className="container">
        <StepButton
          currentStep={stepNumber}
          setCurrentStep={setStepNumber}
          decrement
        />
        <StepperContainer>
          {
            <StepperStep>
              {stepperSteps.find((step) => step.id === stepNumber)?.component}
            </StepperStep>
          }
        </StepperContainer>
        <StepButton currentStep={stepNumber} setCurrentStep={setStepNumber} />
      </div>
    </div>
  );
};

export default Stepper;
