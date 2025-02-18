import React, { useState } from "react"
import { FaUser, FaCar, FaSuitcaseRolling } from "react-icons/fa"
import styles from "./EditCar.module.css"
import Statusbar from "../../Header/index"
import { toast } from "react-toastify"

const EditCarModal = ({ car, onSave, onCancel, onChange }) => {
  const red = (data) => toast.warning(data)
  const [newImage, setNewImage] = useState(car.image)
  const [pricing, setPricing] = useState(car.pricing)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewImage(reader.result)
        onChange({ target: { name: "image", value: reader.result } })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAmountChange = (e, index) => {
    if (e.target.value === "") {
      red("Should not be empty")
    } else {
      const newPricing = [...pricing]
      newPricing[index].amount = e.target.value
      setPricing(newPricing)
    }
  }

  const handleRangeChange = (e, index) => {
    if (e.target.value === "") {
      red("Should not be empty")
    } else {
      const newPricing = [...pricing]
      newPricing[index].range = e.target.value
      setPricing(newPricing)
    }
  }

  const handleHoursChange = (e, index) => {
    if (e.target.value === "") {
      red("Should not be empty")
    } else {
      const newPricing = [...pricing]
      newPricing[index].hours = e.target.value
      setPricing(newPricing)
    }
  }

  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <h3>Edit Car Details</h3>
          <form>
            <div className={styles.imageUploadSection}>
              <img
                src={newImage}
                alt="Car Preview"
                className={styles.imagePreview}
              />
              <label htmlFor="imageUpload" className={styles.uploadLabel}>
                Change Image
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.imageInput}
              />
            </div>
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={onChange}
              placeholder="Car Name"
            />
            <input
              type="number"
              name="passengers"
              value={car.passengers}
              onChange={onChange}
              placeholder="Passengers"
            />
            <input
              type="number"
              name="model"
              value={car.model}
              onChange={onChange}
              placeholder="Model Year"
            />
            <input
              type="number"
              name="bags"
              value={car.bags}
              onChange={onChange}
              placeholder="Bags"
            />
            <textarea
              name="description"
              value={car.description}
              onChange={onChange}
              placeholder="Description"
              rows={3}
            />
            <div className={styles.amountRangeHoursBox}>
              {pricing.map((price, index) => (
                <div key={index} className={styles.amountRangeHours}>
                  <input
                    type="number"
                    placeholder="Hours"
                    value={price.hours}
                    onChange={(e) => handleHoursChange(e, index)}
                    min={1}
                  />
                  <input
                    type="number"
                    placeholder="Range"
                    value={price.range}
                    onChange={(e) => handleRangeChange(e, index)}
                    min={1}
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={price.amount}
                    onChange={(e) => handleAmountChange(e, index)}
                    min={1}
                  />
                </div>
              ))}
            </div>
          </form>
          <div className={styles.modalActions}>
            <button onClick={onCancel} className={styles.cancelButton}>
              Cancel
            </button>
            <button onClick={onSave} className={styles.saveButton}>
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const ConfirmPasswordModal = ({ onConfirm, onCancel, errorMessage }) => {
  const [password, setPassword] = useState("")

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    onConfirm(password)
  }

  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <h3>Admin Password Required</h3>
          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Admin Password"
          />
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <div className={styles.modalActions}>
            <button onClick={onCancel} className={styles.cancelButton}>
              Cancel
            </button>
            <button onClick={handleSubmit} className={styles.confirmButton}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const CarList = () => {
  const green = (data) => toast.success(data)
  const red = (data) => toast.warning(data)
  const [cars, setCars] = useState([
    {
      name: "i20 (Petrol)",
      passengers: 4,
      model: 2018,
      bags: 2,
      description:
        "A premium hatchback with modern features, excellent build quality, and a refined petrol engine for a smooth ride.",
      image:
        "https://imgd.aeplcdn.com/642x361/n/cw/ec/51428/hyundai-i20-left-front-three-quarter1.jpeg",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1500,
        },
        {
          hours: 18,
          range: 250,
          amount: 1200,
        },
        {
          hours: 12,
          range: 200,
          amount: 1000,
        },
      ],
    },
    {
      name: "Ritz",
      passengers: 4,
      model: 2012,
      bags: 2,
      description:
        "A compact, practical hatchback with tall-boy design and great headroom, offering fuel efficiency and easy handling.",
      image: "https://t.ly/7olNT",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1200,
        },
        {
          hours: 18,
          range: 250,
          amount: 1000,
        },
        {
          hours: 12,
          range: 200,
          amount: 800,
        },
      ],
    },
    {
      name: "Ford Figo",
      passengers: 4,
      model: 2015,
      bags: 2,
      description:
        "A small, sporty hatchback known for its responsive engine, solid build, and enjoyable driving dynamics.",
      image: "https://t.ly/CsXnI",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1000,
        },
        {
          hours: 18,
          range: 250,
          amount: 800,
        },
        {
          hours: 10,
          range: 250,
          amount: 1000,
        },
      ],
    },
    {
      name: "Ford Aspire",
      passengers: 5,
      model: 2018,
      bags: 3,
      description:
        "A compact sedan with a comfortable interior, strong diesel engine, and a focus on safety features like airbags and ABS.",
      image: "https://t.ly/S33d9",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1000,
        },
        {
          hours: 18,
          range: 250,
          amount: 800,
        },
        {
          hours: 10,
          range: 250,
          amount: 1000,
        },
      ],
    },
    {
      name: "Swift Dzire",
      passengers: 5,
      model: 2018,
      bags: 3,
      description:
        "A fuel-efficient, stylish compact sedan ideal for families, offering a spacious interior and smooth ride quality.",
      image: "https://t.ly/wr1EN",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1000,
        },
        {
          hours: 18,
          range: 250,
          amount: 800,
        },
        {
          hours: 10,
          range: 250,
          amount: 1000,
        },
      ],
    },
    {
      name: "Ecosport Diesel",
      passengers: 5,
      model: 2017,
      bags: 3,
      description:
        "A rugged compact SUV with a fuel-efficient diesel engine, offering good torque and features suited for both city and off-road driving.",
      image: "https://t.ly/fOenb",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1000,
        },
        {
          hours: 18,
          range: 250,
          amount: 800,
        },
        {
          hours: 10,
          range: 250,
          amount: 1000,
        },
      ],
    },
    {
      name: "Kia Sonet Diesel",
      passengers: 5,
      model: 2024,
      bags: 3,
      description:
        "A tech-loaded subcompact SUV featuring a clutchless manual transmission, sunroof, and infotainment for a comfortable, high-tech ride.",
      image: "https://i.cdn.newsbytesapp.com/images/l41120230408124304.jpeg",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1000,
        },
        {
          hours: 18,
          range: 250,
          amount: 800,
        },
        {
          hours: 10,
          range: 250,
          amount: 1000,
        },
      ],
    },
    {
      name: "Ertiga & XL6",
      passengers: 5,
      model: 2024,
      bags: 3,
      description:
        "Spacious MPVs ideal for families, with the Ertiga offering practicality and the XL6 featuring captain seats and a more premium feel.",
      image:
        "https://res.cloudinary.com/dagkvnqd9/image/upload/20190823065014_maruti-xl6-3_em88gn.jpg",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1000,
        },
        {
          hours: 18,
          range: 250,
          amount: 800,
        },
        {
          hours: 10,
          range: 250,
          amount: 1000,
        },
      ],
    },
    {
      name: "Swift",
      passengers: 4,
      model: 2018,
      bags: 2,
      description:
        "A sporty, fuel-efficient hatchback known for its reliability and agile city performance. Offers good cabin space and a sleek design.",
      image:
        "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228140536/Spinny-Assured-Maruti-Suzuki-Swift.jpg",
      pricing: [
        {
          hours: 24,
          range: 300,
          amount: 1000,
        },
        {
          hours: 18,
          range: 250,
          amount: 800,
        },
        {
          hours: 10,
          range: 250,
          amount: 1000,
        },
      ],
    },
  ])

  const [editMode, setEditMode] = useState(null)
  const [tempCar, setTempCar] = useState(null)
  const [actionVisibleIndex, setActionVisibleIndex] = useState(null)
  const [passwordModalVisible, setPasswordModalVisible] = useState(false)
  const [removalIndex, setRemovalIndex] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  const correctAdminPassword = "admin123"

  const handleEditClick = (index) => {
    setEditMode(index)
    setTempCar({ ...cars[index] })
    setActionVisibleIndex(null)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTempCar((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveChanges = () => {
    const updatedCars = [...cars]
    updatedCars[editMode] = tempCar
    setCars(updatedCars)
    setEditMode(null)
    green("Changes saved successfully!")
  }

  const handleCancelEdit = () => {
    setEditMode(null)
    red("Edit cancelled")
  }

  const handleRemoveClick = (index) => {
    setRemovalIndex(index)
    setPasswordModalVisible(true)
  }

  const handlePasswordConfirm = (password) => {
    if (password === correctAdminPassword) {
      const updatedCars = cars.filter(
        (_, carIndex) => carIndex !== removalIndex
      )
      setCars(updatedCars)
      setPasswordModalVisible(false)
      setActionVisibleIndex(null)
      setErrorMessage("")
      green("Car removed successfully!")
    } else {
      setErrorMessage("Incorrect password. Please try again.")
      red("Failed to remove car. Incorrect password.")
    }
  }

  const handlePasswordCancel = () => {
    setPasswordModalVisible(false)
    setErrorMessage("")
    red("Car removal cancelled!")
  }

  return (
    <>
      <div className={styles.main}>
        <Statusbar />
        <div className={styles.container}>
          <h2 className={styles.heading}>Cars List</h2>

          <div className={styles.carList}>
            {cars.map((car, index) => (
              <div key={index} className={styles.carCard}>
                <img
                  src={car.image}
                  alt={`${car.name}-car`}
                  className={styles.carImg}
                />
                <h2 className={styles.carName}>{car.name}</h2>
                <div className={styles.carFeatures}>
                  <div className={styles.carPassengers}>
                    <FaUser size={20} /> {car.passengers} Passengers
                  </div>
                  <div className={styles.carModel}>
                    <FaCar size={20} /> Model {car.model}
                  </div>
                  <div className={styles.carBags}>
                    <FaSuitcaseRolling size={20} /> {car.bags} Bags
                  </div>
                </div>
                <p className={styles.carDesc}>{car.description}</p>

                <div className={styles.pricesBox}>
                  {car.pricing.map((price, priceIndex) => (
                    <p key={priceIndex} className={styles.prices}>
                      {`${price.hours}Hours(${price.range} KM) - ${price.amount}Rs`}
                    </p>
                  ))}
                </div>

                <div className={styles.actionButtonBox}>
                  {actionVisibleIndex === index ? (
                    <>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => handleRemoveClick(index)}
                      >
                        Remove
                      </button>
                      <button
                        type="button"
                        className={styles.editBtn}
                        onClick={() => handleEditClick(index)}
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className={styles.actionBtn}
                      onClick={() => setActionVisibleIndex(index)}
                    >
                      Action
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {editMode !== null && (
        <EditCarModal
          car={tempCar}
          onSave={handleSaveChanges}
          onCancel={handleCancelEdit}
          onChange={handleInputChange}
        />
      )}

      {passwordModalVisible && (
        <ConfirmPasswordModal
          onConfirm={handlePasswordConfirm}
          onCancel={handlePasswordCancel}
          errorMessage={errorMessage}
        />
      )}
    </>
  )
}

export default CarList
