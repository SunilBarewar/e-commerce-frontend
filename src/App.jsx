// import Layout from "./components/Layout";
// import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import Router from "./routes";
function App() {
  return (
    <>
      <div className="px-[10px] lg:px-[80px] font-Inter">
        <Router />
      </div>
    </>
  );
}

export default App;
