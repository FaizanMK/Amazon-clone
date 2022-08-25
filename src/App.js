import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <h1>HOME PAGE!!</h1>
              </>
            }
          />
          <Route path="/Login" element={<h1>LOGIN PAGE!!!</h1>} />
          <Route path="/checkout" element={<h1>CHECK-OUT PAGE!!!</h1>} />

          <Route path="*" element={<h1>NOT FOUND!!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
