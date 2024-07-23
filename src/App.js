import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
