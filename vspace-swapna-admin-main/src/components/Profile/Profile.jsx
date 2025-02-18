import React, { useState } from "react"
import styles from "./Profile.module.css"
import StatusBar from "../Header/index"
import { FaEye, FaEyeSlash, FaPen } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const Profile = () => {
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [originalPassword, setOriginalPassword] = useState("")
  const [logoImage, setLogoImage] = useState(
    "https://res.cloudinary.com/dagkvnqd9/image/upload/v1726917662/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
  )
  const [originalImage, setOriginalImage] = useState(logoImage)
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showCnfrmPassword, setShowCnfrmPassword] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const navigate = useNavigate()

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoImage(reader.result)
        setOriginalImage(reader.result)
        setIsEditing(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSubmit = (eve) => {
    eve.preventDefault()

    if (newPassword === confirmPassword) {
      if (newPassword.length >= 8) {
        green("Password updated successfully")
        setOriginalPassword(newPassword)
        setOldPassword("")
        setNewPassword("")
        setConfirmPassword("")
        setShowOldPassword(false)
        setShowNewPassword(false)
        setShowCnfrmPassword(false)
      } else {
        red("Password should be at least 8 characters long")
      }
    } else {
      red("Passwords do not match")
    }
  }

  const isSaveButtonEnabled =
    newPassword !== originalPassword ||
    confirmPassword !== originalPassword ||
    logoImage !== originalImage

  return (
    <>
      <div className={styles.main}>
        <StatusBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>Profile</h2>
          <form className={styles.passwordBox}>
            <h2 className={styles.changePass}>Edit Profile</h2>
            <div className={styles.imageEditBox}>
              <img
                onClick={() => navigate("/home")}
                src={logoImage}
                alt="logo"
                className="swapna-logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div
                style={{
                  height: 34,
                  width: 34,
                  border: "2px solid black",
                  position: "absolute",
                  right: 0,
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  top: 0,
                }}
                onClick={handleEditClick}
              >
                <FaPen size={16} />
              </div>
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "30px",
                    cursor: "pointer",
                    backgroundColor: "white",
                    height: "150px",
                    width: "150px",
                  }}
                />
              )}
            </div>
            <div className={styles.pass}>
              <input
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter old password"
                className={styles.passAndCnfrmPass}
              />
              {showOldPassword ? (
                <FaEyeSlash
                  size={20}
                  onClick={() => setShowOldPassword(!showOldPassword)}
                />
              ) : (
                <FaEye
                  size={20}
                  onClick={() => setShowOldPassword(!showOldPassword)}
                />
              )}
            </div>
            <div className={styles.pass}>
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className={styles.passAndCnfrmPass}
              />
              {showNewPassword ? (
                <FaEyeSlash
                  size={20}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              ) : (
                <FaEye
                  size={20}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              )}
            </div>
            <div className={styles.pass}>
              <input
                type={showCnfrmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new Password"
                className={styles.passAndCnfrmPass}
              />
              {showCnfrmPassword ? (
                <FaEyeSlash
                  size={20}
                  onClick={() => setShowCnfrmPassword(!showCnfrmPassword)}
                />
              ) : (
                <FaEye
                  size={20}
                  onClick={() => setShowCnfrmPassword(!showCnfrmPassword)}
                />
              )}
            </div>
            <div className={styles.buttonBox}>
              <button
                type="button"
                className={styles.btn}
                onClick={handleSubmit}
                disabled={!isSaveButtonEnabled}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile
