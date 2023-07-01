import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Vendors from "./pages/vendors/Vendors";
import Hiring from "./pages/hiring/Hiring";
import Reports from "./pages/reports/Reports";
import Predictions from "./pages/predictions/Predictions";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="hiring" element={<Hiring/>} />
            <Route path="reports" element={<Reports />} />
            <Route path="predictions" element={<Predictions/>} />
            
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
