import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'shared/ui/header';

const HomePage = lazy(() => import('pages/Home'));
const AboutMe = lazy(() => import('pages/AboutMe'));
const Skills = lazy(() => import('pages/Skills'));
const Portfolio = lazy(() => import('pages/Portfolio'));
const PortfolioItem = lazy(() => import('pages/Project'));
const Contact = lazy(() => import('pages/Contact'));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioItem />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
