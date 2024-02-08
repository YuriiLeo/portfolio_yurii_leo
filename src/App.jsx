import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import About from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";
import NotFound from "./Pages/NotFound/NotFound";
import ProjectsPage from "./Pages/Projects/ProjectsPage"
import Resume from "./Pages/Resume/ResumePage"
import { SharedLayout } from "./components/SharedLayout/SharedLayot";

import { I18nextProvider } from 'react-i18next';
import i18n from "../src/i18n";

export const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<SharedLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </I18nextProvider>
    </>
  );
};
