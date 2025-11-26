import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";

import './App.css'
import BlogPage from './pages/blogPage.tsx';
import TeamPage from './pages/team.tsx';
import AboutPage from './pages/about.tsx';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />


        <Route path="*" element={<div>404: Page not found</div>} />
      </Routes>

      <Footer />
  </>
  )
}



export default App
