import "./styles.css";
import Dashboard from "./features/Dashboard";

export default function App() {
  return (
    <div className="App">
      <div style={{ color: "red", fontSize: "22px" }}>Student Information</div>
      <Dashboard />
    </div>
  );
}
