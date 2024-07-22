const StepButton = (props: {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  decrement?: Boolean;
}) => {
  const { currentStep, setCurrentStep, decrement } = props;
  const handleClick = () => {
    if (decrement) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return <button onClick={handleClick}>{decrement ? "<" : ">"}</button>;
};

export default StepButton;
