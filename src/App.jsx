import Layout from "./components/Layout";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="px-[10px] lg:px-[80px] font-Inter">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
