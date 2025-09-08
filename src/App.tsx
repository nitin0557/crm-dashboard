import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Dynamic Import for Home
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      {/* Suspense shows fallback while Home is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/pricing" element={<Pricing />} /> */} 
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
