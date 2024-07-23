import React from 'react';
import styles from './Sidebar.module.css';
import { Home, BarChart, Settings, ExitToApp } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>INTENSEGP</div>
      <ul className={styles.menu}>
        <li><Home /> Dashboard</li>
        <li><BarChart /> Academy</li>
        <li><BarChart /> Questionários</li>
        <li><BarChart /> Planos de Ação</li>
        <li><BarChart /> Relatórios</li>
        <li><Settings /> Configurações</li>
        <li><ExitToApp /> Log Out</li>
      </ul>
    </div>
  );
}

export default Sidebar;
