import AppLayout from "./components/AppLayout";
import HomeComponent from "./components/pages/HomeComponent";
import ChiSiamo from "./components/pages/ChiSiamo";
import ListaPost from "./components/pages/ListaPost";
import PostDetail from "./components/pages/PostDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/ListaPost" element={<ListaPost />} />
          <Route path="/ListaPost/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
