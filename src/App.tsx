
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-layout">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
