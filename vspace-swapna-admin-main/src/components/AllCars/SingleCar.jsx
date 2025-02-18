import React from "react"
import styles from "./SingleCar.module.css"
import { Link } from "react-router-dom";

const SingleCar = (props) => {
  return (
    <>
      <Link to={`/allcars/${props.imgName}`} className={styles.link}>
        <div className={styles.main}>
          <div className={styles.carImage}>
            <img src={props.imgSrc} alt={props.imgAlt} />
          </div>
          <div className={styles.carName}>{props.imgName}</div>
          <div className={styles.carDescription}>{props.description}</div>
        </div>
      </Link>
    </>
  )
}

export default SingleCar
