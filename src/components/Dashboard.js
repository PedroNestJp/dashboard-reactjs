import React from 'react';
import styles from './Dashboard.module.css';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Engajamento dos Colaboradores</h3>
          <p>Nível de Engajamento</p>
          <span>40%</span>
        </div>
        <div className={styles.statCard}>
          <h3>Treinamentos</h3>
          <p>% Atingido</p>
          <span>70%</span>
        </div>
        <div className={styles.statCard}>
          <h3>Pactuações</h3>
          <p>meta anual</p>
          <span>90%</span>
        </div>
      </div>
      <div className={styles.chartSection}>
        <h3>Responsabilidade Socioambiental</h3>
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
