import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.js";
import KakaoLogin from "./pages/KakaoLogin.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KakaoLogin />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
