import HomeComponent from "./components/HomeComponent";
import AppLayout from "./components/AppLayout";
import ChiSiamo from "./components/ChiSiamo";
import ListaPost from "./components/ListaPost";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/ListaPost" element={<ListaPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
