import { useState } from "react";
import StepperContainer from "../common/Stepper/StepperContainer";
import WeatherForecast from "../common/Weather/WeatherForecast";
import Layout from "../common/Layout";

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
    <Layout>
      <StepperContainer
        stepNumber={stepNumber}
        setStepNumber={setStepNumber}
        stepperSteps={stepperSteps}
      />
    </Layout>
  );
};

export default Stepper;
