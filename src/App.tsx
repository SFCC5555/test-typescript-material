import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SurveyPage } from "./pages/SurveyPage";
import { LoginPage } from "./pages/LoginPage";
import data from "./data.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeData } from "./redux/dataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeData(data));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<SurveyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
