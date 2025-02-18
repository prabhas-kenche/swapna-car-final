import React, { useState } from "react"
import styles from "./AllBookings.module.css"
import StatusBar from "../Header/index"
import {
  FaDownload,
  FaEllipsisV,
  FaFileExcel,
  FaFilePdf,
  FaReceipt,
} from "react-icons/fa"
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import * as XLSX from "xlsx"
import { saveAs } from "file-saver"
import { useNavigate } from "react-router-dom";

const AllBookings = () => {
  const [allBookingsData] = useState([
    {
      bookingId: 1234,
      customerName: "Priya Sharma",
      carBooked: "Swift",
      bookedFrom: "10/11/2024",
      bookedTo: "12/11/2024",
      totalCost: 2400,
    },
    {
      bookingId: 1235,
      customerName: "Rahul Verma",
      carBooked: "Hyundai i20",
      bookedFrom: "15/11/2024",
      bookedTo: "17/11/2024",
      totalCost: 3200,
    },
    {
      bookingId: 1236,
      customerName: "Anjali Gupta",
      carBooked: "Maruti Alto",
      bookedFrom: "20/11/2024",
      bookedTo: "22/11/2024",
      totalCost: 1800,
    },
    {
      bookingId: 1237,
      customerName: "Rajesh Singh",
      carBooked: "Honda City",
      bookedFrom: "25/11/2024",
      bookedTo: "28/11/2024",
      totalCost: 5400,
    },
    {
      bookingId: 1238,
      customerName: "Pooja Mehta",
      carBooked: "Toyota Innova",
      bookedFrom: "01/12/2024",
      bookedTo: "05/12/2024",
      totalCost: 7500,
    },
    {
      bookingId: 1239,
      customerName: "Karan Malhotra",
      carBooked: "Ford EcoSport",
      bookedFrom: "08/12/2024",
      bookedTo: "10/12/2024",
      totalCost: 4200,
    },
    {
      bookingId: 1240,
      customerName: "Meera Nair",
      carBooked: "Tata Nexon",
      bookedFrom: "12/12/2024",
      bookedTo: "14/12/2024",
      totalCost: 3900,
    },
    {
      bookingId: 1241,
      customerName: "Siddharth Rao",
      carBooked: "Kia Seltos",
      bookedFrom: "18/12/2024",
      bookedTo: "20/12/2024",
      totalCost: 4600,
    },
    {
      bookingId: 1242,
      customerName: "Neha Jain",
      carBooked: "MG Hector",
      bookedFrom: "22/12/2024",
      bookedTo: "25/12/2024",
      totalCost: 6200,
    },
    {
      bookingId: 1243,
      customerName: "Amit Tiwari",
      carBooked: "Volkswagen Polo",
      bookedFrom: "28/12/2024",
      bookedTo: "30/12/2024",
      totalCost: 3400,
    },
  ])

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const downloadPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(12)

    const columns = [
      "Booking ID",
      "Customer Name",
      "Car Booked",
      "Booked From",
      "Booked To",
      "Total Cost",
    ]

    const rows = allBookingsData.map((booking) => [
      booking.bookingId,
      booking.customerName,
      booking.carBooked,
      booking.bookedFrom,
      booking.bookedTo,
      booking.totalCost,
    ])

    doc.autoTable({
      head: [columns],
      body: rows,
      margin: { top: 30 },
      theme: "grid",
    })

    doc.save("all_bookings.pdf")
    setIsDownloadModalOpen(false)
  }

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(allBookingsData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings")
    const excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" })

    saveAs(new Blob([excelFile]), "all_bookings.xlsx")
    setIsDownloadModalOpen(false)
  }

  const openDownloadModal = () => {
    setIsDownloadModalOpen(true)
  }

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false)
  }

  const [showActionId, setShowActionId] = useState(null)

  const toggleActionMenu = (id) => {
    setShowActionId((prevId) => (prevId === id ? null : id))
  }

  const navigate = useNavigate()
  
  const handleBillInvoiceClick = (booking) => {
    navigate('/allbookings/bill', {
      state: {
        customerName: booking.customerName,
        carBooked: booking.carBooked,
        bookedFrom: booking.bookedFrom,
        bookedTo: booking.bookedTo,
        totalCost: booking.totalCost,
      },
    });
  };

  return (
    <>
      <div className={styles.main}>
        <StatusBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>All Bookings</h2>
          <div className={styles.allBookingsBox}>
            <div className={styles.filterBox}>
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
                    <button
                      onClick={downloadPDF}
                      className={styles.modalButton}
                    >
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

              <input type="date" name="from" className={styles.fromAndTo} />
              <label className={styles.to}>To</label>
              <input type="date" name="from" className={styles.fromAndTo} />
            </div>

            <div className={styles.allBookings}>
              <div className={styles.allBookingsHeading}>
                <div className={styles.bookingHeadings}>Booking ID</div>
                <div className={styles.bookingHeadings}>Customer Name</div>
                <div className={styles.bookingHeadings}>Car Booked</div>
                <div className={styles.bookingHeadings}>Booked From</div>
                <div className={styles.bookingHeadings}>Booked To</div>
                <div className={styles.bookingHeadings}>Total Cost</div>
                <div className={styles.bookingHeadings}>Action</div>
              </div>
              <div className={styles.allBookingsData}>
                {allBookingsData.map((booking, index) => (
                  <div key={index} className={styles.booking}>
                    <div className={styles.bookingData}>
                      {booking.bookingId}
                    </div>
                    <div className={styles.bookingData}>
                      {booking.customerName}
                    </div>
                    <div className={styles.bookingData}>
                      {booking.carBooked}
                    </div>
                    <div className={styles.bookingData}>
                      {booking.bookedFrom}
                    </div>
                    <div className={styles.bookingData}>{booking.bookedTo}</div>
                    <div className={styles.bookingData}>
                      {booking.totalCost}
                    </div>
                    <div className={styles.bookingData} id={styles.action}>
                      <FaEllipsisV
                        size={20}
                        onClick={() => toggleActionMenu(booking.bookingId)}
                      />
                      {showActionId === booking.bookingId && (
                        <>
                          <div className={styles.actionBox}>
                            <div
                              className={styles.bookingId}
                              style={{ textDecoration: "underline" }}
                            >
                              Booking Id: {booking.bookingId}
                            </div>
                            <div
                              className={styles.bill}
                              onClick={() => handleBillInvoiceClick(booking)}
                            >
                              <FaReceipt size={20} /> Bill Invoice
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllBookings
