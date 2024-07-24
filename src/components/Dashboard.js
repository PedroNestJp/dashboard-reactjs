import React from 'react';
import styles from './Dashboard.module.css';
import Chart from './Chart';
import mapCollaboratorsImg from '../assets/mapCollaborators.png';
import personIcon from '../assets/person-icon.png';
import chartDecline from '../assets/chart-decline.png';
import chartUp from '../assets/chart-up.png';
import { Tune, ToggleOffRounded } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.myChartContainer}>
        <h3>Meu Gráfico</h3>
        <div className={styles.statCard}>
          <div className={styles.content}>
            <img src={personIcon} alt="Person Icon" />
            <div className={styles.statsTexts}>
              <h3>Engajamento dos Colaboradores</h3>
              <p>Mês atual, Nível de Engajamento</p>
            </div>
          </div>
          <div className={styles.chartIndicator}>
            <img src={chartDecline} alt="Chart Decline" />
            <span>40%</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.content}>
            <img src={personIcon} alt="Person Icon" />
            <div className={styles.statsTexts}>
              <h3>Treinamentos</h3>
              <p>Mês atual, % Atingido</p>
            </div>
          </div>
          <div className={styles.chartIndicator}>
            <img src={chartUp} alt="Chart Up" />
            <span>70%</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.content}>
            <img src={personIcon} alt="Person Icon" />
            <div className={styles.statsTexts}>
              <h3>Pactuações</h3>
              <p>Mês atual, meta anual</p>
            </div>
          </div>
          <div className={styles.chartIndicator}>
            <img src={chartUp} alt="Chart Up" />
            <span>90%</span>
          </div>
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statsTitle}>
          <h3>Estatisticas</h3>
          <Tune />
        </div>
        <div className={styles.statsCards} >
          <div className={styles.statCard}>
            <div className={styles.content}>
              <img src={personIcon} alt="Person Icon" />
              <div className={styles.statsTexts}>
                <h3>Questionário</h3>
                <span>N%</span>
              </div>
            </div>
            <div className={styles.chartIndicator}>
              <ToggleOffRounded />
              <span> Progresso </span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.content}>
              <img src={personIcon} alt="Person Icon" />
              <div className={styles.statsTexts}>
                <h3>Checklist</h3>
                <span>N%</span>
              </div>
            </div>
            <div className={styles.chartIndicator}>
              <ToggleOffRounded />
              <span> Progresso </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <h3>Responsabilidade Socioambiental</h3>
        <Chart />
      </div>
      
      <div className={styles.mapCollaborators}>
        <h3>Colaboradores</h3>
        <img src={mapCollaboratorsImg} alt="mapa de local dos colaboradores" />
        <div className={styles.reportMapCollaborators}>
          <h3>N% Fabrica</h3>
          <h3>N% Escritório</h3>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
