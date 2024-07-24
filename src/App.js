import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Questionnaire from './components/Questionnaire';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Academy from './components/Academy';
import ActionPlans from './components/ActionPlans';
import Reports from './components/Reports';
import Settings from './components/Settings';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/questionnaires" element={<Questionnaire />} />
            <Route path="/action-plans" element={<ActionPlans />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
