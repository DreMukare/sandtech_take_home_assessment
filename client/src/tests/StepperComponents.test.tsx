import { render, screen } from "@testing-library/react";
import StepperStep from "../components/common/Stepper/StepperStep";
import StepIndicator from "../components/common/Stepper/StepIndicator";
import { IStepperSteps } from "../utils/types/stepper";
import StepperContainer from "../components/common/Stepper/StepperContainer";
import Stepper from "../components/pages/Stepper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StepButton from "../components/common/Stepper/StepButton";

const stepperSteps: IStepperSteps[] = [
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
    component: <p>Step 2</p>,
  },
  {
    key: "step3",
    id: 2,
    title: "Step 3",
    component: <p>Step 3</p>,
  },
];
const setStepNumber = vi.fn();
describe("StepperStep", () => {
  it("should render div", () => {
    render(<StepperStep content={"Just some text"} />);

    expect(screen.getByText("Just some text")).toBeTruthy();
    expect(screen.getByTestId("stepper-step")).toBeInTheDocument();
  });
});

describe("StepIndicator", () => {
  it("should render button", () => {
    render(
      <StepIndicator
        stepNumber={1}
        setStep={setStepNumber}
        stepperSteps={stepperSteps}
      />
    );
    expect(screen.getAllByRole("button")).toBeTruthy();
    expect(screen.getAllByTestId("step-indicator")).toBeTruthy();
  });
});

describe("StepperContainer", () => {
  it("should render StepperContainer", () => {
    render(
      <StepperContainer
        stepNumber={1}
        setStepNumber={setStepNumber}
        stepperSteps={stepperSteps}
      />
    );

    expect(screen.getByTestId("stepper-step")).toBeTruthy();
    expect(screen.getAllByRole("button")).toBeTruthy();
    expect(screen.getAllByTestId("step-indicator")).toBeTruthy();
  });
});

describe("Stepper", () => {
  const queryClient = new QueryClient();
  it("should render Stepper", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Stepper />
      </QueryClientProvider>
    );

    expect(screen.getByTestId("stepper-step")).toBeTruthy();
    expect(screen.getAllByRole("button")).toBeTruthy();
    expect(screen.getAllByTestId("step-indicator")).toBeTruthy();
  });
});

describe("StepButton", () => {
  it("should render button", () => {
    render(
      <StepButton
        currentStep={1}
        setCurrentStep={setStepNumber}
        decrement={false}
      />
    );
    expect(screen.getAllByRole("button")).toBeTruthy();
    // TODO: Add tests for user input
  });
});
