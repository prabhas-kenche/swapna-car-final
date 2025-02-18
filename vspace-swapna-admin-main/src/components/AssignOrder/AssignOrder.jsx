import React, { useState } from "react"
import styles from "./AssignOrder.module.css"
import Sidebar from "../Header/index"
import { toast } from "react-toastify"

const AssignOrder = () => {
  const green = (data) => toast.success(data)

  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    contact: "",
    email: "",
    address: "",
    age: "",
    pickupDateTime: "",
    dropDateTime: "",
    visitingPlace: "",
    totalDuration: "",
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const calculateDuration = (pickup, drop) => {
    const pickupDate = new Date(pickup)
    const dropDate = new Date(drop)

    if (pickupDate && dropDate && dropDate > pickupDate) {
      const diffMs = dropDate - pickupDate
      const hours = Math.floor(diffMs / (1000 * 60 * 60))
      const days = Math.floor(hours / 24)
      return days > 0 ? `${days} days ${hours % 24} hours` : `${hours} hours`
    }
    return ""
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value }

      if (name === "pickupDateTime" || name === "dropDateTime") {
        updatedData.totalDuration = calculateDuration(
          updatedData.pickupDateTime,
          updatedData.dropDateTime
        )
      }

      return updatedData
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
    setFormData({
      name: "",
      profession: "",
      contact: "",
      email: "",
      address: "",
      age: "",
      pickupDateTime: "",
      dropDateTime: "",
      visitingPlace: "",
      totalDuration: "",
      employeeName: "",
    })
    green("Order assigned successfully!")
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const cars = [
    "Swift",
    "i20",
    "Ritz",
    "Ford Figo",
    "Ford Aspire",
    "Swift Dzire",
    "EcoSport",
    "Kia Sonet",
    "XL 6",
  ]

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.right}>
          <h2 className={styles.heading}>Assign Order</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="profession" className={styles.label}>
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact" className={styles.label}>
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={styles.input}
                maxLength="10"
                pattern="\d{10}"
                title="Enter a valid 10-digit contact number"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address" className={styles.label}>
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={styles.textarea}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="age" className={styles.label}>
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="car" className={styles.label}>
                Select Car
              </label>
              <select
                id="car"
                name="car"
                value={formData.car}
                onChange={handleChange}
                className={styles.input}
                required
              >
                <option defaultChecked>---- Choose ----</option>
                {cars.map((car) => (
                  <option key={car} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="pickupDateTime" className={styles.label}>
                Pickup Date and Time
              </label>
              <input
                type="datetime-local"
                id="pickupDateTime"
                name="pickupDateTime"
                value={formData.pickupDateTime}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="dropDateTime" className={styles.label}>
                Drop Date and Time
              </label>
              <input
                type="datetime-local"
                id="dropDateTime"
                name="dropDateTime"
                value={formData.dropDateTime}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="visitingPlace" className={styles.label}>
                Visiting Place
              </label>
              <input
                type="text"
                id="visitingPlace"
                name="visitingPlace"
                value={formData.visitingPlace}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="totalDuration" className={styles.label}>
                Total Duration
              </label>
              <input
                type="text"
                id="totalDuration"
                name="totalDuration"
                value={formData.totalDuration}
                className={styles.input}
                readOnly
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Assign Order
            </button>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Order Assigned Successfully!</h3>
            <p>Your order has been successfully assigned.</p>
            <button className={styles.modalCloseButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AssignOrder
