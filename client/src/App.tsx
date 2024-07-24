import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Stepper from "./components/pages/Stepper";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stepper />
    </QueryClientProvider>
  );
}

export default App;
