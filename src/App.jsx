import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Website from "./pages/Website";
import Form from "./pages/Form";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
        </Route>
        <Route path="/login" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
