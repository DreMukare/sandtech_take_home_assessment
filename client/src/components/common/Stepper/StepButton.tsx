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

  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "lightblue",
        color: "white",
        fontSize: "1.5rem",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {decrement ? "<" : ">"}
    </button>
  );
};

export default StepButton;
