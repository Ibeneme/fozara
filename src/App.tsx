import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/templates/navbar/navbar";
import Footer from "@/components/templates/footer/footer";
import HomePage from "@/pages/home/page";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-[#f8fafc]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

/* 
  =============================================================================
  CODE EXPLANATION GUIDE:
  =============================================================================
  - `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`: 
    Imports core routing components from React Router to handle client-side page navigation.
  
  - `<Router>`: 
    Wraps the application to enable routing context and keep the UI in sync with the URL.
  
  - `<div className="flex min-h-screen flex-col bg-[#f8fafc]">`: 
    A flexbox container that ensures the layout takes up at least the full viewport height, keeping the footer pushed to the bottom.
  
  - `<Navbar />`: 
    Renders the navigation bar component at the top of every page.
  
  - `<main className="flex-grow">`: 
    Acts as the flexible middle container that fills available vertical space between the header and footer.
  
  - `<Routes>` and `<Route path="/" element={<HomePage />} />`: 
    Defines the application routing map; matches the root URL ("/") and renders the HomePage component inside it.
  
  - `<Footer />`: 
    Renders the footer component at the bottom of every page.
  =============================================================================
*/
