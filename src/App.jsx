import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Club from './components/pages/club';
import Contact from './components/pages/contact';
import Homepage from './components/pages/homepage';
import Team from './components/pages/team';
import Test from './components/pages/test';

import { Header, Footer } from './components/common';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/club" element={<Club />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          {/* ##TODO remove test */}
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
      <Footer text="MUKS Iskierka Tarnów © Przemek Rura 2022" />
    </div>
  );
}

export default App;
