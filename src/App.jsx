import { RouterProvider } from "react-router/dom";
import router from "./routes/routes";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </AuthContextProvider>
  );
};

export default App;
