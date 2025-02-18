import React, { useState } from "react"
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css"
import Statusbar from "../../Header/index"
import { toast } from "react-toastify"

const Faqs = () => {
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)
  const [isEditing, setIsEditing] = useState(false)
  const [policyText, setPolicyText] = useState(
    `
Booking and Rental
1. How do I book a self-drive car?
- Visit our website, select your location, dates, and car model, and follow the booking process or simply contact us through call or WhatsApp.

2. What are the rental durations?
- We rent cars on Daily, weekly, and monthly basis.

3. Can I extend my rental period?
- Yes, you can extend the car by contacting us at 8309772580, then our booking agent will check the availability of the car to confirm you.

Payment and Pricing
1. What are the rental charges?
- Charges vary by car model and rental duration. Check our website for pricing.

2. What payment methods do you accept?
- We accept credit cards, debit cards, and UPI payments.

3. Is there a security deposit?
- Yes, it will be refunded upon returning the vehicle.

Vehicle and Maintenance
1. What vehicles are available?
- Please check the ‘OUR CARS’ page on our website to know the availability of cars.

2. Are vehicles insured?
- Yes, our vehicles are fully insured.

3. Who is responsible for fuel and maintenance?
- The customer is responsible for fuel and maintenance costs.

Eligibility and Requirements
1. What are the age requirements?
- Minimum age is 21.

2. Do I need a driver's license?
- Yes, a valid driver's license is required.

3. Are there any additional requirements?
- Original 4 wheeler driving license and Original Aadhar Card.

Cancellation and Refund
1. Can I cancel my booking?
- Yes, you can cancel the booking before 12 hours. But the advance for booking will not be refunded.

Miscellaneous
1. Are tolls and parking included?
- No, tolls and parking are the customer's responsibility.

2. What happens in case of an accident?
- Contact us immediately at 8309772580 or 9550884883. Customer needs to manage the damage costs.

Contact Us
For any further questions or concerns, contact us at:

Phone: 8309772580 / 9550884883

Email: swapnaselfdrivecars@gmail.com`
  )
  const [editedPolicyText, setEditedPolicyText] = useState(policyText)
  const [adminPass, setAdminPass] = useState("")
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSubmitClick = () => {
    setShowPasswordPrompt(true)
  }

  const handlePasswordSubmit = () => {
    const correctPassword = "admin123"
    if (adminPass === correctPassword) {
      setPolicyText(editedPolicyText)
      setIsEditing(false)
      setShowPasswordPrompt(false)
      setAdminPass("")
      green("FAQ's updated successfully!")
    } else {
      red("Incorrect password. Try again!")
    }
  }

  return (
    <div className={styles.main}>
      <Statusbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>FAQ's</h2>
        <div className={styles.policyBox}>
          {isEditing ? (
            <textarea
              value={editedPolicyText}
              onChange={(e) => setEditedPolicyText(e.target.value)}
              className={styles.textArea}
            />
          ) : (
            <p className={styles.policyText}>{policyText}</p>
          )}
        </div>
        <div className={styles.buttonContainer}>
          {!isEditing && (
            <button
              onClick={handleEditClick}
              className={styles.editButton}
              disabled={isEditing}
            >
              Edit
            </button>
          )}
          {isEditing && (
            <button onClick={handleSubmitClick} className={styles.submitButton}>
              Publish
            </button>
          )}
        </div>

        {showPasswordPrompt && (
          <>
            <div
              className={styles.backdrop}
              onClick={() => setShowPasswordPrompt(false)}
            ></div>
            <div className={styles.passwordPrompt}>
              <label htmlFor="adminPass">Enter Admin Password:</label>
              <input
                type="password"
                id="adminPass"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                className={styles.passwordInput}
              />
              <button
                onClick={handlePasswordSubmit}
                className={styles.passwordSubmitButton}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Faqs
