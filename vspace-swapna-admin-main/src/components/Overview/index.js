import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import Filter from '../Filter';
import DashboardGraphs from '../DashboardGraphs';
import Progressbars from '../CircularProgressBars';

import './index.css';

// Custom Carbon Growth Icon Component
export function CarbonGrowth(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586L3.414 26L13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z" />
    </svg>
  );
}

const OverviewCards = () => {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <h2 className='heading'>Overview</h2>
        <Filter />
      </div>

      <div className="overview  mb-5">
        <div className="overview-card">
          <div className="icon">
            <FaIndianRupeeSign />
          </div>
          <div className="card-content">
            <span className="title">Total Earnings</span>
            <h2><FaIndianRupeeSign className='rupee-icon'/>146,000</h2>
            <p>
              <span className="increase">
                <CarbonGrowth /> +17%
              </span>
              Since last week
            </p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="card-content">
            <span className="title">Total Bookings</span>
            <h2>1400</h2>
            <p>
              <span className="increase">
                <CarbonGrowth /> +17%
              </span>
              Since last week
            </p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="card-content">
            <span className="title">Total Days</span>
            <h2>150,700</h2>
            <p>
              <span className="increase">
                <CarbonGrowth /> +17%
              </span>
              Since last week
            </p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon">
            <i className="fas fa-car"></i>
          </div>
          <div className="card-content">
            <span className="title">Total Cars</span>
            <h2>500</h2>
            <p>
              <span className="increase">
                <CarbonGrowth /> +17%
              </span>
              Since last week
            </p>
          </div>
        </div>
      </div>

      <div className="graphs-container mb-5">
        <DashboardGraphs />
      </div>

      <div className="progressbars-container">
        <Progressbars />
      </div>
    </div>
  );
};

export default OverviewCards;
