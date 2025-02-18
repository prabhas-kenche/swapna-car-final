import React, { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import styles from "./EmployeeCard.module.css"
import { toast } from "react-toastify";

const EmployeeCard = ({
  id,
  name,
  email,
  designation,
  isSuspended,
  handleSuspend,
}) => {
  const [showActions, setShowActions] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    id,
    name,
    email,
    designation,
  })

  const green = (data) => toast.success(data)

  const handleActionClick = () => {
    setShowActions(true)
  }

  const handleSuspendClick = () => {
    setShowPopup(true)
  }

  const handlePopupConfirm = () => {
    handleSuspend(id)
    setShowPopup(false)
    setShowActions(false)
  }

  const handlePopupCancel = () => {
    setShowPopup(false)
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    green("Employee details updated successfully")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <div className={styles.profileIcon}>
          <FaUserCircle size={130} color="grey"/>
        </div>

        <div className={styles.boxes}>
          <b>ID</b>:{" "}
          {isEditing ? (
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className={styles.input}
            />
          ) : (
            formData.id
          )}
        </div>

        <div className={styles.boxes}>
          <b>Name</b>:{" "}
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
          ) : (
            formData.name
          )}
        </div>

        <div className={styles.boxes}>
          <b>Designation</b>:{" "}
          {isEditing ? (
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className={styles.input}
            />
          ) : (
            formData.designation
          )}
        </div>

        <div className={styles.boxes}>
          <b>Email</b>:{" "}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          ) : (
            formData.email
          )}
        </div>
      </div>

      <div className={styles.actions}>
        {!showActions ? (
          <button className={styles.actionBtn} onClick={handleActionClick}>
            Action
          </button>
        ) : (
          <>
            <button
              className={`${styles.suspendBtn} ${
                isSuspended ? styles.suspended : ""
              }`}
              onClick={handleSuspendClick}
            >
              {isSuspended ? "Suspended" : "Suspend"}
            </button>
            {isEditing ? (
              <button className={styles.saveBtn} onClick={handleSaveClick}>
                Publish
              </button>
            ) : (
              <button className={styles.editBtn} onClick={handleEditClick}>
                Edit
              </button>
            )}
          </>
        )}
      </div>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>Are you sure you want to suspend this employee?</p>
            <button className={styles.confirmBtn} onClick={handlePopupConfirm}>
              Yes
            </button>
            <button className={styles.cancelBtn} onClick={handlePopupCancel}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeCard
