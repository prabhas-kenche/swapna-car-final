import React, { useState } from "react"
import styles from "./AllCustomers.module.css"
import Sidebar from "../Header/index"
import { FaDownload, FaEllipsisV, FaFileExcel, FaFilePdf } from "react-icons/fa"
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import * as XLSX from "xlsx"
import { saveAs } from "file-saver"

const AllCustomers = () => {
  const [customers] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      contact: "8765432109",
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@example.com",
      contact: "7654321098",
    },
    {
      id: 4,
      name: "Sneha Iyer",
      email: "sneha.iyer@example.com",
      contact: "9123456780",
    },
    {
      id: 5,
      name: "Vikas Verma",
      email: "vikas.verma@example.com",
      contact: "8987654321",
    },
    {
      id: 6,
      name: "Anjali Nair",
      email: "anjali.nair@example.com",
      contact: "9345678123",
    },
    {
      id: 7,
      name: "Ravi Singh",
      email: "ravi.singh@example.com",
      contact: "9987654321",
    },
    {
      id: 8,
      name: "Neha Gupta",
      email: "neha.gupta@example.com",
      contact: "9123487654",
    },
    {
      id: 9,
      name: "Kiran Das",
      email: "kiran.das@example.com",
      contact: "9876123456",
    },
  ])

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const downloadPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(12)

    const columns = [
      "Customer ID",
      "Customer Name",
      "Customer Contact Number",
      "Customer Email",
    ]

    const rows = customers.map((booking) => [
      booking.id,
      booking.name,
      booking.contact,
      booking.email,
    ])

    doc.autoTable({
      head: [columns],
      body: rows,
      margin: { top: 30 },
      theme: "grid",
    })

    doc.save("all_customers.pdf")
    setIsDownloadModalOpen(false)
  }

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(customers)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings")
    const excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" })

    saveAs(new Blob([excelFile]), "all_customers.xlsx")
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
          <h2 className={styles.heading}>All Customers</h2>
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
          
          <div className={styles.allBookings}>
            <div className={styles.allBookingsHeading}>
              <div className={styles.bookingHeadings}>S No. </div>
              <div className={styles.bookingHeadings}>Customer Name</div>
              <div className={styles.bookingHeadings}>Customer Email</div>
              <div className={styles.bookingHeadings}>Customer Contact No.</div>
              <div className={styles.bookingHeadings}>Action</div>
            </div>
            <div className={styles.allBookingsData}>
              {customers.map((customer, index) => (
                <div key={index} className={styles.booking}>
                  <div className={styles.bookingData}>{customer.id}</div>
                  <div className={styles.bookingData}>
                    {customer.name}
                  </div>
                  <div className={styles.bookingData}>{customer.email}</div>
                  <div className={styles.bookingData}>{customer.contact}</div>
                  <div className={styles.bookingData}>
                    <FaEllipsisV size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllCustomers
