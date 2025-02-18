import React, { useState } from "react"
import styles from "../Essentials/PrivacyPolicy/PrivacyPolicy.module.css"
import Statusbar from "../Header/index"
import { toast } from "react-toastify";

const AboutUs = () => {
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)
  const [isEditing, setIsEditing] = useState(false)
  const [policyText, setPolicyText] = useState(
    `
WELCOME TO SWAPNA SELF DRIVE CARS

Swapna Self Drive Cars is a Telangana-based car hire/car rental company that provides a magnificent range of vehicles to its users. At Swapna Self Drive Cars, we believe that convenience, affordability, flexibility, and customer service are the pillars of a truly enjoyable travel experience for our customers.

Our Vehicle Range

Our range of vehicles is large, starting from the smallest and the basic of hatchbacks to the most luxurious cars. With our extensive fleet of vehicles, we ensure that our customers have access to a wide range of options for their specific needs, whether it's a compact car for city explorations or a spacious SUV for family outings.

Transparent Pricing

We maintain complete transparency in pricing with no hidden fees; you can trust us to provide affordable rates, ensuring that you receive excellent value for your money.

Safety and Comfort

At Swapna Self Drive Cars, we prioritize the safety and comfort of our customers. Our vehicles undergo regular maintenance and safety checks to ensure performance and reliability.

Choose Us for Your Next Journey

Choose Swapna Self Drive Cars for a memorable and enjoyable travel experience. Let us be a part of your journey, and together, we will make every ride a happy one.
`
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
      green("About Us updated successfully!")
    } else {
      red("Incorrect password. Try again!")
    }
  }

  return (
    <div className={styles.main}>
      <Statusbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>About Us</h2>
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
              Submit
            </button>
          )}
        </div>

        {showPasswordPrompt && (
          <>
            <div className={styles.backdrop} onClick={() => setShowPasswordPrompt(false)}></div>
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

export default AboutUs
