import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserDetail from "./pages/UserDetail/UserDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/userDetail" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
