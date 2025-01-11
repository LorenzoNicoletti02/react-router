import AppLayout from "./components/AppLayout";
import HomeComponent from "./components/pages/HomeComponent";
import ChiSiamo from "./components/pages/ChiSiamo";
import ListaPost from "./components/pages/ListaPost";
import PostDetail from "./components/pages/PostDetail";
import NotFound from "./components/pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/ListaPost">
            <Route index element={<ListaPost />} />
            <Route path=":id" element={<PostDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
