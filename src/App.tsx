import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "./routes/routes";
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
