import React, { useState } from "react"
import styles from "./PrivacyPolicy.module.css"
import Statusbar from "../../Header/index"
import { toast } from "react-toastify"

const PrivacyPolicy = () => {
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)
  const [isEditing, setIsEditing] = useState(false)
  const [policyText, setPolicyText] = useState(
    `
At Swapna Self Drive Cars, we value your privacy and are committed to protecting your personal information.

1. Collection of Personal Information
We collect personal information from you when you:

Register on our website
Book a self-drive car
Contact us through email or phone
The information we collect includes:

Name
Email address
Phone number
Driver's basic license details
2. Use of Personal Information
We use your personal information to:

Process your booking requests
Provide customer support
Send marketing communications (with your consent)
Improve our services
3. Sharing of Personal Information
We share your personal information with law enforcement agencies (if required).

4. Data Security
We implement reasonable security measures to protect your personal information from unauthorized access.

5. Data Retention
We retain your personal information for as long as necessary to provide our services.

6. Your Rights
You have the right to:

Access your personal information
Correct or update your information
Withdraw consent for marketing communications
Request deletion of your information
7. Cookies and Tracking
We use cookies to improve your browsing experience.

8. Changes to this Policy
We reserve the right to update this policy.

9. Location Tracking
To prevent theft, and to allow us to locate your location in emergency situations (accidents, breakdowns, etc.), we track the location of the vehicle. As part of our service, the location of the car may be released to police or similar parties for investigation and to provide assistance in emergencies.

10. No Liability
By accessing the website, the user agrees that Swapna Self Drive Cars will not be liable for any direct or indirect loss, liability, indirect and consequential damages of any nature whatsoever, arising from the use of the website and from the content on the website.

11. Contact Us
For any privacy-related concerns, contact: swapnaselfdrivecars@gmail.com or call us at 8309772580.

Consent
By using our website, you consent to this privacy policy.`
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
      green("Privacy Policy updated successfully!")
    } else {
      red("Incorrect password. Try again!")
    }
  }

  return (
    <div className={styles.main}>
      <Statusbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Privacy Policy</h2>
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

export default PrivacyPolicy
