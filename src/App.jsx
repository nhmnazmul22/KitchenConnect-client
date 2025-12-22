import { RouterProvider } from "react-router/dom";
import router from "./routes/routes";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import SearchContextProvider from "./context/SearchContext/SearchContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SearchContextProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster position="top-right" reverseOrder={false} />
        </SearchContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
