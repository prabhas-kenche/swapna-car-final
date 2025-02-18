import React, { useState } from "react"
import styles from "./AddEmployeeRole.module.css"
import Statusbar from "../Header/index"

import {
  FaMoneyCheckAlt,
  FaCar,
  FaUsers,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaClipboardList,
} from "react-icons/fa"
import { toast } from "react-toastify";

const AddEmployeeRole = () => {
  const [selectedRoles, setSelectedRoles] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [employeeName, setEmployeeName] = useState("")
  const [jobRole, setJobRole] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [formVisible, setFormVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)

  const roles = [
    { name: "Payments", icon: <FaMoneyCheckAlt className={styles.icon} /> },
    { name: "All Cars", icon: <FaCar className={styles.icon} /> },
    { name: "All Customers", icon: <FaUsers className={styles.icon} /> },
    { name: "All Bookings", icon: <FaCalendarCheck className={styles.icon} /> },
    { name: "Tracking", icon: <FaMapMarkerAlt className={styles.icon} /> },
    { name: "Assign Order", icon: <FaClipboardList className={styles.icon} /> },
  ]

  const handleRoleChange = (role) => {
    setSelectedRoles((prevRoles) =>
      prevRoles.includes(role)
        ? prevRoles.filter((r) => r !== role)
        : [...prevRoles, role]
    )
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRoles([])
    } else {
      setSelectedRoles(roles.map((role) => role.name))
    }
    setSelectAll(!selectAll)
  }

  const [stepCompleted, setStepCompleted] = useState(false)

  const handleSubmitRoles = (e) => {
    e.preventDefault()

    if (selectedRoles.length === 0) {
      red("Please select at least one role.")
      return
    }

    green("Roles assigned successfully!")

    setStepCompleted(true)
    setCurrentStep(2)
    setFormVisible(true)
  }

  const handleBackToRoles = () => {
    setCurrentStep(1)
    setFormVisible(false)
  }

  const handleSubmitEmployee = (e) => {
    e.preventDefault()

    if (password === confirmPassword) {
      if ( password.length >= 8) {
        green("Employee assigned successfully!")
      } else if (password.length < 8) {
        red("Password must be at least 8 characters")
      }
    }
    else if(password !== confirmPassword) {
      red("Passwords do not match!")
    }
    setEmployeeName('')
    setJobRole('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className={styles.main}>
      <Statusbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Assign Employee Roles</h2>

        <div className={styles.statusBar}>
          <div
            className={`${styles.step} ${
              currentStep === 1 ? styles.active : ""
            } ${stepCompleted ? styles.completed : ""}`}
          >
            1
          </div>
          <hr className={styles.hLine} />
          <div
            className={`${styles.step} ${
              currentStep === 2 ? styles.active : ""
            }`}
          >
            2
          </div>
        </div>

        {currentStep === 1 && (
          <form onSubmit={handleSubmitRoles} className={styles.form}>
            <div className={styles.btn}>
              <button
                type="button"
                onClick={handleSelectAll}
                className={styles.selectAllButton}
              >
                {selectAll ? "Deselect All" : "Select All"}
              </button>
            </div>
            <div className={styles.cardsContainer}>
              {roles.map((role, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${
                    selectedRoles.includes(role.name) ? styles.activeCard : ""
                  }`}
                  onClick={() => handleRoleChange(role.name)}
                >
                  <input
                    type="checkbox"
                    id={`role-${index}`}
                    checked={selectedRoles.includes(role.name)}
                    onChange={() => handleRoleChange(role.name)}
                    className={styles.checkbox}
                  />
                  <div className={styles.bottom}>
                    <div className={styles.iconBox}>{role.icon}</div>
                    <label htmlFor={`role-${index}`} className={styles.label}>
                      {role.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <button type="submit" className={styles.submitButton}>
              Next
            </button>
          </form>
        )}

        {formVisible && currentStep === 2 && (
          <form onSubmit={handleSubmitEmployee} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="jobRole" className={styles.label}>
                Job Role:
              </label>
              <input
                type="text"
                id="jobRole"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="employeeName" className={styles.label}>
                Employee Name:
              </label>
              <input
                type="text"
                id="employeeName"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="role" className={styles.label}>
                Permissions:
              </label>
              <ul className={styles.selectedRoles}>
                {selectedRoles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>

            <div className={styles.btns}>
              <button
                type="button"
                onClick={handleBackToRoles}
                className={styles.backButton}
              >
                Back
              </button>
              <button type="submit" className={styles.submitButton}>
                Assign Employee
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default AddEmployeeRole
