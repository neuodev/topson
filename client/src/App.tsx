import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import NoPage from "./screens/NoPage";
import RegisterScreen from "./screens/RegisterScreen";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
