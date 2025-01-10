import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Login from "./pages/login";
import Page from "./pages/page";

const App = () => {
  return (
    <>
      {/* router */}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
