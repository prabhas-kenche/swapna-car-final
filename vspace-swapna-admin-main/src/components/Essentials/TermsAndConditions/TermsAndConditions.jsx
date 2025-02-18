import React, { useState } from "react"
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css"
import Statusbar from "../../Header/index"
import { toast } from "react-toastify"

const TermsAndConditions = () => {
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)
  const [isEditing, setIsEditing] = useState(false)
  const [policyText, setPolicyText] = useState(
    `
1. Definitions
Renter means the person renting the vehicle.
Vehicle means the self-drive car rented by the Renter.
Rental Period means the duration of the rental.

2. Eligibility
The Renter must be at least 21 years old.
The Renter must possess a valid driver's license.

3. Rental Agreement
The Renter agrees to rent the Vehicle for the Rental Period.
The Renter must return the Vehicle on the agreed date and time.

4. Payment
The Renter must pay the rental fee and security deposit.

5. Vehicle Condition
The Vehicle will be delivered in good condition.
The Renter must return the Vehicle in the same condition.

6. Insurance
The Vehicle is insured, but the Renter is liable for damages.

7. Fuel and Maintenance
The Renter is responsible for fuel and maintenance costs.

8. Traffic Violations
The Renter is liable for traffic violations.`
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
      green("Terms And Conditions updated successfully!")
    } else {
      red("Incorrect password. Try again!")
    }
  }

  return (
    <div className={styles.main}>
      <Statusbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Terms And Conditions</h2>
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

export default TermsAndConditions
