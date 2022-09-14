import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
