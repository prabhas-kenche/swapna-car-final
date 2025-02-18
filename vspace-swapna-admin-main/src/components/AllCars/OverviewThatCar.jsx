import React, { useEffect, useState } from "react";
import styles from "./OverviewThatCar.module.css";
import Sidebar from "../Header/index";
import { useParams } from "react-router-dom";
import { CarbonGrowth } from "../Overview";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Filter from "../Filter";
import DashboardGraphs from "../DashboardGraphs";

const OverviewThatCar = () => {
  const { carname } = useParams();
  const [carStats, setCarStats] = useState({
    totalEarnings: 0,
    totalBookings: 0,
    totalDays: 0
  });

  const carData = {
    Swift: {
      carname: 'Swift (Petrol)',
      imgSrc: "https://www.seekpng.com/png/full/258-2589471_swift-car-png.png",
      imgAlt: "Swift",
      description: "A compact and fuel-efficient car, perfect for city drives.",
    },
    i20: {
      carname: 'i20 (Petrol)',
      imgSrc: "https://www.carsized.com/resources/hyundai/i20/d/2014/sl_246111089_hyundai-i20-2014-side-view_4x.png",
      imgAlt: "i20",
      description: "Stylish and feature-packed, ideal for long journeys.",
    },
    Ritz: {
      carname: 'Ritz',
      imgSrc: "https://res.cloudinary.com/dagkvnqd9/image/upload/v1735673852/used-maruti-suzuki-car-500x500-removebg-preview_aqdrpd.png",
      imgAlt: "Ritz",
      description: "A reliable hatchback with a spacious interior.",
    },
    "Ford Figo": {
      carname: 'Ford Figo',
      imgSrc: "https://www.carblogindia.com/wp-content/uploads/2017/04/ford-figo-s-white-official-image-side.png",
      imgAlt: "Ford Figo",
      description: "A sporty hatchback with excellent mileage.",
    },
    "Ford Aspire": {
      carname: 'Ford Aspire',
      imgSrc: "https://res.cloudinary.com/dagkvnqd9/image/upload/v1735674023/R-removebg-preview_kgqpgq.png",
      imgAlt: "Ford Aspire",
      description: "A premium sedan with advanced safety features.",
    },
    "Swift Dzire": {
      carname: 'Swift Dzire',
      imgSrc: "https://toppng.com/uploads/preview/maruti-suzuki-dzire-car-color-ford-crown-victoria-side-view-11562993605wszxnzlruh.png",
      imgAlt: "Swift Dzire",
      description: "A top choice for comfort and affordability.",
    },
    EcoSport: {
      carname: 'EcoSport',
      imgSrc: "https://www.carsized.com/resources/ford/ecosport/d/2017/sm_280111106_ford-ecosport-2017-side-view_4x.png",
      imgAlt: "EcoSport",
      description: "A compact SUV built for adventure and city drives.",
    },
    "Kia Sonet": {
      carname: 'Kia Sonet Diesel',
      imgSrc: "https://www.kia.com/content/dam/kwcms/gt/en/images/showroom/sonet-qy-22my-rhd/360/Exterior/clear_white/01.png",
      imgAlt: "Kia Sonet",
      description: "A modern SUV with cutting-edge technology.",
    },
    "XL 6": {
      carname: 'Ertiga & XL6',
      imgSrc: "https://images.carandbike.com/car-images/colors/maruti-suzuki/xl6/maruti-suzuki-xl6-opulent-red.png?v=1650862431",
      imgAlt: "XL 6",
      description: "A premium MPV offering luxury and space.",
    },
  };

  const carInfo = carData[carname];

  useEffect(() => {
    fetch(`/api/car-overview/${carname}`)
      .then((res) => res.json())
      .then((data) => {
        setCarStats({
          totalEarnings: data.totalEarnings,
          totalBookings: data.totalBookings,
          totalDays: data.totalDays
        });
      })
      .catch((err) => console.error("Error fetching car overview:", err));
  }, [carname]);

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.container}>
          <div className={styles.allCarsName}>{carInfo.imgAlt}</div>
          <div className="overview-container">
            <Filter />
            <div className="overview mb-5">
              <div className="overview-card">
                <div className="icon">
                  <FaIndianRupeeSign />
                </div>
                <div className="card-content">
                  <span className="title">Total Earnings</span>
                  <h2>
                    <FaIndianRupeeSign className="rupee-icon" />
                    {carStats.totalEarnings}
                  </h2>
                  <p>
                    <span className="increase">
                      <CarbonGrowth /> +17%
                    </span>
                    Since last week
                  </p>
                </div>
              </div>

              <div className="overview-card">
                <div className="icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="card-content">
                  <span className="title">Total Bookings</span>
                  <h2>{carStats.totalBookings}</h2>
                  <p>
                    <span className="increase">
                      <CarbonGrowth /> +17%
                    </span>
                    Since last week
                  </p>
                </div>
              </div>

              <div className="overview-card">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="card-content">
                  <span className="title">Total Days</span>
                  <h2>{carStats.totalDays}</h2>
                  <p>
                    <span className="increase">
                      <CarbonGrowth /> +17%
                    </span>
                    Since last week
                  </p>
                </div>
              </div>

              <div className="overview-card">
                <div className="icon">
                  <i className="fas fa-car"></i>
                </div>
                <div className="card-content">
                  <span className="title">{carInfo.imgAlt}</span>
                  <h2>500</h2>
                  <p>
                    <span className="increase">
                      <CarbonGrowth /> +17%
                    </span>
                    Since last week
                  </p>
                </div>
              </div>
            </div>
            <div className="graphs-container mb-5">
              <DashboardGraphs />
            </div>
            <div className={styles.carImgBox}>
              <img src={carInfo.imgSrc} alt={carInfo.imgAlt} className={styles.carImg}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewThatCar;
