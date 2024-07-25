const StepperStep = (props: { content: React.ReactNode }) => {
  const { content } = props;
  return (
    <div
      data-testid="stepper-step"
      style={{
        width: "100%",
        height: "30em",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {content}
    </div>
  );
};

export default StepperStep;
