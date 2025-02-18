import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './index.module.css';

const Progressbars = () => {
  const circularValues = [
    { value: 75, label: '75%', color: '#00b894' },
    { value: 71, label: '71%', color: '#00b894' },
    { value: 46, label: '46%', color: '#ff7675' },
  ];

  const progressBarValues = [
    { value: 51, label: 'Lorem ipsum sit', color: '#ff7675' },
    { value: 78, label: 'Lorem ipsum sit', color: '#00b894' },
  ];

  return (
    <div className={styles.progressbarsContainer}>
      <div className={styles.circularProgressbarContainer}>
        {circularValues.map((item, index) => (
          <div key={index} className={styles.circularProgressbarItem}>
            <CircularProgressbar
              value={item.value}
              text={item.label}
              styles={buildStyles({
                pathColor: item.color,
                textColor: '#333',
                trailColor: '#dfe6e9',
                width: '50%'
              })}
            />
            <p className={styles.circularProgressbarText}>Lorem ipsum dolor sit amet dolor</p>
          </div>
        ))}
      </div>

      <div className={styles.progressBarsContainer}>
        {progressBarValues.map((item, index) => (
          <div key={index} className={styles.progressBarItem}>
            <h5 className={styles.progressBarLabel}>{item.value}%</h5>
            <ProgressBar 
              now={item.value} 
              label={`${item.label}`} 
              variant={item.color === '#00b894' ? 'success' : 'danger'} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbars;
