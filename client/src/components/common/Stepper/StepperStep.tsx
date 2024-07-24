const StepperStep = (props: { content: React.ReactNode }) => {
  const { content } = props;
  return (
    <div
      style={{
        width: "100%",
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
