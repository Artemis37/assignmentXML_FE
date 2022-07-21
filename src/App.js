// import "./App.css";
import "./css/Layout.scss";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { ProgressSpinner } from "primereact/progressspinner";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesList from "./components/routes";
import CommonLayout from "./layout/CommonLayout";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="8"
      />
    </div>
  ) : (
    <BrowserRouter>
      <Routes>
        {RoutesList.map((item) => (
          <Route path={item.path} element={item.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
