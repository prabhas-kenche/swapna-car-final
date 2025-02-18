import React, { useState } from "react"
import EmployeeCard from "./EmployeeCard "
import styles from "./EmployeeList.module.css"
import Sidebar from "../../Header/index"
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import * as XLSX from "xlsx"
import { saveAs } from "file-saver"
import { FaDownload, FaFileExcel, FaFilePdf } from "react-icons/fa";
import { toast } from "react-toastify";

const EmployeeList = () => {
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)

  const [employees, setEmployees] = useState([
    {
      id: 12345,
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      designation: "Software Engineer",
    },
    {
      id: 54321,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      designation: "Product Manager",
    },
    {
      id: 67890,
      name: "Anil Mehta",
      email: "anil.mehta@example.com",
      designation: "Designer",
    },
    {
      id: 23456,
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      designation: "QA Engineer",
    },
    {
      id: 98765,
      name: "Amit Verma",
      email: "amit.verma@example.com",
      designation: "DevOps Engineer",
    },
    {
      id: 34567,
      name: "Neha Singh",
      email: "neha.singh@example.com",
      designation: "HR Manager",
    },
    {
      id: 45678,
      name: "Vikas Gupta",
      email: "vikas.gupta@example.com",
      designation: "Marketing Specialist",
    },
  ])

  const [showPopup, setShowPopup] = useState(false)
  const [password, setPassword] = useState("")
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
  const [errorMessage, setErrorMessage] = useState("") 

  const handleSuspend = (id) => {
    setSelectedEmployeeId(id)
    setShowPopup(true)
    setErrorMessage("") 
  }

  const handleConfirmSuspend = () => {
    if (password === "admin123") {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== selectedEmployeeId)
      )
      setShowPopup(false)
      green("Employee suspended successfully!")
      setPassword('')
    } else {
      setErrorMessage("Incorrect password!")
      red("Incorrect password!")
    }
  }

  const handleCancel = () => {
    setShowPopup(false)
    red("Suspension Cancelled!");
  }
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  
    const downloadPDF = () => {
      const doc = new jsPDF()
  
      doc.setFontSize(12)
  
      const columns = [
        "Employee ID",
        "Employee Name",
        "Employee Email",
        "Employee Designation",
      ]
  
      const rows = employees.map((booking) => [
        booking.id,
        booking.name,
        booking.email,
        booking.designation,
      ])
  
      doc.autoTable({
        head: [columns],
        body: rows,
        margin: { top: 30 },
        theme: "grid",
      })
  
      doc.save("all_employees.pdf")
      setIsDownloadModalOpen(false)
    }
  
    const downloadExcel = () => {
      const worksheet = XLSX.utils.json_to_sheet(employees)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings")
      const excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" })
  
      saveAs(new Blob([excelFile]), "all_employees.xlsx")
      setIsDownloadModalOpen(false)
    }
  
    const openDownloadModal = () => {
      setIsDownloadModalOpen(true)
    }
  
    const closeDownloadModal = () => {
      setIsDownloadModalOpen(false)
    }

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.container}>
        <h2 className={styles.heading}>Employee List</h2>
        <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "50px",
              marginBottom: "30px",
            }}
          >
            <div className={styles.downloadBox}>
              <button
                onClick={openDownloadModal}
                className={styles.downloadButton}
              >
                <FaDownload size={16} />
              </button>
            </div>

            {isDownloadModalOpen && (
              <div className={styles.downloadModal}>
                <div className={styles.modalContent}>
                  <p>Choose a format to download:</p>
                  <button onClick={downloadPDF} className={styles.modalButton}>
                    <FaFilePdf size={20} /> Download PDF
                  </button>
                  <button
                    onClick={downloadExcel}
                    className={styles.modalButton}
                  >
                    <FaFileExcel size={20} />
                    Download Excel
                  </button>
                  <button
                    onClick={closeDownloadModal}
                    className={styles.modalButton}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className={styles.employeeListContainer}>
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                id={employee.id}
                name={employee.name}
                email={employee.email}
                designation={employee.designation}
                handleSuspend={handleSuspend}
              />
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={`${styles.popup} ${showPopup ? styles.show : ""}`}>
          <div className={styles.popupContent}>
            <h3>Enter your password to confirm suspension</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.popupInput}
              placeholder="Password"
            />
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <div className={styles.popupActions}>
              <button onClick={handleCancel} className={styles.noBtn}>
                No
              </button>
              <button onClick={handleConfirmSuspend} className={styles.yesBtn}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmployeeList
