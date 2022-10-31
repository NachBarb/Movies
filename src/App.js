import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuTop from "./components/MenuTop/MenuTop";
//pages
import Error404 from "./pages/error404";
import Home from "./pages/home";
import Movie from "./pages/movie";
import NewMovies from "./pages/newMovies";
import Popular from "./pages/popular";
import Search from "./pages/search";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/newMovies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
