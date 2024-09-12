import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from './components/InputForm';
import MemberCard from './components/MemberCard';
import './index.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/input-form" element={<InputForm />} />
        <Route path="/member-card" element={<MemberCard />} />
      </Routes>
    </Router>
  );
}

export default App;
