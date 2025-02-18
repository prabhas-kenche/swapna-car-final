import React from "react"
import SingleCar from "./SingleCar"
import styles from "./Cars.module.css"
import Sidebar from "../Header/index"

const Cars = () => {
  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.container}>
          <div className={styles.allCarsName}>All Cars</div>
          <div className={styles.allCars}>
          <SingleCar
              imgSrc="https://www.seekpng.com/png/full/258-2589471_swift-car-png.png"
              imgAlt="Swift"
              imgName="Swift"
              description="A compact and fuel-efficient car, perfect for city drives."
            />
            <SingleCar
              imgSrc="https://www.carsized.com/resources/hyundai/i20/d/2014/sl_246111089_hyundai-i20-2014-side-view_4x.png"
              imgAlt="i20"
              imgName="i20"
              description="Stylish and feature-packed, ideal for long journeys."
            />
            <SingleCar
              imgSrc="https://res.cloudinary.com/dagkvnqd9/image/upload/v1735673852/used-maruti-suzuki-car-500x500-removebg-preview_aqdrpd.png"
              imgAlt="Ritz"
              imgName="Ritz"
              description="A reliable hatchback with a spacious interior."
            />
            <SingleCar
              imgSrc="https://www.carblogindia.com/wp-content/uploads/2017/04/ford-figo-s-white-official-image-side.png"
              imgAlt="Ford Figo"
              imgName="Ford Figo"
              description="A sporty hatchback with excellent mileage."
            />
            <SingleCar
              imgSrc="https://res.cloudinary.com/dagkvnqd9/image/upload/v1735674023/R-removebg-preview_kgqpgq.png"
              imgAlt="Ford Aspire"
              imgName="Ford Aspire"
              description="A premium sedan with advanced safety features."
            />
            <SingleCar
              imgSrc="https://toppng.com/uploads/preview/maruti-suzuki-dzire-car-color-ford-crown-victoria-side-view-11562993605wszxnzlruh.png"
              imgAlt="Swift Dzire"
              imgName="Swift Dzire"
              description="A top choice for comfort and affordability."
            />
            <SingleCar
              imgSrc="https://www.carsized.com/resources/ford/ecosport/d/2017/sm_280111106_ford-ecosport-2017-side-view_4x.png"
              imgAlt="EcoSport"
              imgName="EcoSport"
              description="A compact SUV built for adventure and city drives."
            />
            <SingleCar
              imgSrc="https://www.kia.com/content/dam/kwcms/gt/en/images/showroom/sonet-qy-22my-rhd/360/Exterior/clear_white/01.png"
              imgAlt="Kia Sonet"
              imgName="Kia Sonet"
              description="A modern SUV with cutting-edge technology."
            />
            <SingleCar
              imgSrc="https://images.carandbike.com/car-images/colors/maruti-suzuki/xl6/maruti-suzuki-xl6-opulent-red.png?v=1650862431"
              imgAlt="XL 6"
              imgName="XL 6"
              description="A premium MPV offering luxury and space."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cars
