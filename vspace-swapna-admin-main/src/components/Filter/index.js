import React, { useState } from "react"
import { HiAdjustmentsHorizontal } from "react-icons/hi2"
import "./index.css" // Assuming you have a separate CSS file for styling

const Filter = () => {
  const [showFilter, setShowFilter] = useState(true) // Filter is open by default
  const [dateRange, setDateRange] = useState("") // State for selected date range

  const toggleFilter = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter)
  }

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value)
  }

  return (
    <div className="filter-container">
      {showFilter && (
        <select
          value={dateRange}
          onChange={handleDateRangeChange}
          className="date-range-dropdown"
        >
          <option value="">Select a range</option>
          <option value="1 year">1 Year</option>
          <option value="6 months">6 Months</option>
          <option value="3 months">3 Months</option>
          <option value="1 month">1 Month</option>
          <option value="10 days">10 Days</option>
        </select>
      )}

      {showFilter && (
        <div className="filter-form">
          <div>
            <label htmlFor="from-date">From Date:</label>
            <input type="date" id="from-date" />
          </div>
          <div>
            <label htmlFor="to-date">To Date:</label>
            <input type="date" id="to-date" />
          </div>
        </div>
      )}

      <div
        className={`filter-icon ${showFilter ? "active" : ""}`}
        onClick={toggleFilter}
      >
        <HiAdjustmentsHorizontal />
      </div>
    </div>
  )
}

export default Filter
