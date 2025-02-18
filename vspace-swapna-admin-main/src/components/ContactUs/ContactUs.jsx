import React, { useState } from "react"
import styles from "./ContactUs.module.css"
import SideBar from "../Header/index"
import { toast } from "react-toastify"

const ContactUs = () => {
  const green = (data) => toast.success(data)
  const [contactUsDetails, setContactUsDetails] = useState({
    number: "8309772580",
    email: "swapnaselfdrivecars@gmail.com",
    whatsappNumber: "8309772580",
  })
  const [editable, setEditable] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactUsDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    setEditable(false)
    green("Contact details updated successfully!")
  }

  return (
    <>
      <div className={styles.main}>
        <SideBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>Contact Us</h2>
          <div className={styles.contactUsBox}>
            <div className={styles.contactUsDetails}>
              {editable ? (
                <>
                  <div className={styles.contactUsInputBox}>
                    <label className={styles.contactUsInputLabel}>
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={contactUsDetails.number}
                      onChange={handleInputChange}
                      className={styles.textArea}
                    />
                  </div>
                  <div className={styles.contactUsInputBox}>
                    <label className={styles.contactUsInputLabel}>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={contactUsDetails.email}
                      onChange={handleInputChange}
                      className={styles.textArea}
                    />
                  </div>
                  <div className={styles.contactUsInputBox}>
                    <label className={styles.contactUsInputLabel}>
                      WhatsApp Number:
                    </label>
                    <input
                      type="text"
                      name="whatsappNumber"
                      value={contactUsDetails.whatsappNumber}
                      onChange={handleInputChange}
                      className={styles.textArea}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p className={styles.contactUsInputParaBox}>
                    <strong>Phone Number : &nbsp;</strong>{" "}
                    {contactUsDetails.number}
                  </p>
                  <p className={styles.contactUsInputParaBox}>
                    <strong>Email : &nbsp;</strong> {contactUsDetails.email}
                  </p>
                  <p className={styles.contactUsInputParaBox}>
                    <strong>WhatsApp Number : &nbsp;</strong>
                    {contactUsDetails.whatsappNumber}
                  </p>
                </>
              )}
            </div>
            <div className={styles.contactUsBtnBox}>
              {editable ? (
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={handleSave}
                >
                  Publish
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.editButton}
                  onClick={() => setEditable(true)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
