import React, { useState, useEffect } from "react";
import StatusBar from "../Header/index";
import styles from "./NewOrders.module.css";
import No_Orders from "../../assests/no-order-3-256 (1).png";
import axios from "axios";  // Make sure to install axios

const NewOrders = () => {
  const [newOrders, setNewOrders] = useState([]);  // State to hold new orders
  const [loading, setLoading] = useState(true);     // State to manage loading status
  const [error, setError] = useState(null);         // State for error handling

  // Fetch new orders from the backend when the component loads
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings'); // Replace with your backend URL
        setNewOrders(response.data);  // Update the state with fetched data
      } catch (error) {
        setError("Error fetching new orders. Please try again.");
        console.error("Error fetching new orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);  // Empty array ensures the effect runs only once on component mount

  return (
    <div className={styles.main}>
      <StatusBar />
      <div className={styles.container}>
        <h2 className={styles.heading}>New Orders</h2>
        <div className={styles.newOrdersBox}>
          {loading ? (
            <p>Loading new orders...</p>
          ) : error ? (
            <p>{error}</p>  // Show error message if there was an issue fetching data
          ) : newOrders.length === 0 ? (
            <>
              <img src={No_Orders} alt="No new orders" />
              <p className={styles.noOrdersText}>
                Currently, there are no new orders. Please check back later or contact support if you need assistance.
              </p>
            </>
          ) : (
            <div>
              {newOrders.map((order) => (
              <div key={order.id} className={styles.orderCard}>
                <img src={order.carImage} alt={order.carTitle} className={styles.carImage} />
                <div className={styles.orderDetails}>
                  <p><strong>Name: </strong> {order.name}</p>
                  <p><strong>Profession: </strong> {order.profession}</p>
                  <p><strong>Contact: </strong> {order.contact}</p>
                  <p><strong>Email: </strong> {order.email}</p>
                  <p><strong>Address: </strong> {order.address}</p>
                  <p><strong>Age: </strong> {order.age}</p>
                  <p><strong>Car: </strong> {order.carTitle}</p>
                  <p><strong>Pickup Date: </strong> {order.pickupDate}</p>
                  <p><strong>Pickup Time: </strong> {order.pickupTime}</p>
                  <p><strong>Drop Date: </strong> {order.dropDate}</p>
                  <p><strong>Drop Time: </strong> {order.dropTime}</p>
                  <p><strong>Total Duration: </strong> {order.totalDays} days</p>
                  <p><strong>Visiting Places: </strong> {order.visitingPlaces}</p>
                  <p><strong>Price: </strong> {order.price}</p>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewOrders;
