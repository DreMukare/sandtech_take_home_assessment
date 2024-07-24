const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div
      style={{
        margin: "auto",
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
