import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Bejelentkezes from './Bejelentkezes'
import Termekek from './termekek';

const App = () => {

  return (
      <Router>
      <Routes>
        <Route path="*" element={<Bejelentkezes/>}/>
        <Route path="/login" element={<Bejelentkezes/>}/>
        <Route path="/termekek" element={<Termekek />}/>
      </Routes>
     </Router>
  );
};

export default App;




