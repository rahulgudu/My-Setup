import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Website from "./pages/Website";
import Form from "./pages/Form";
import { useSelector } from "react-redux";

export default function App() {
  const { user } = useSelector((state) => state.testReducer);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={user ? <Website /> : <Navigate to="/login" />}
          />
        </Route>
        <Route path="/login" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
