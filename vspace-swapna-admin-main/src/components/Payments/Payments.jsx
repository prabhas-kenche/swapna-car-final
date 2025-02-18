import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Header";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import styles from "./Payments.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Payments = () => {
  const { paymentType, subMenuType } = useParams();

  const getGraphData = (type, subMenu) => {
    switch (type) {
      case "cashBased":
        if (subMenu === "cash") {
          return {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "Physical Currency",
                data: [100, 200, 150, 300, 250],
                borderColor: "rgb(255, 255, 255)",
                fill: false,
              },
              {
                label: "Cheque Payments",
                data: [50, 100, 80, 150, 120],
                borderColor: "rgb(0, 0, 0)",
                fill: false,
              },
            ],
          };
        }
        break;
      case "cardBased":
        if (subMenu === "creditCards") {
          return {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "Credit Card Payments",
                data: [80, 120, 100, 180, 160],
                borderColor: "rgb(255, 255, 255)",
                fill: false,
              },
              {
                label: "Debit Card Payments",
                data: [60, 90, 70, 140, 130],
                borderColor: "rgb(0, 0, 0)",
                fill: false,
              },
            ],
          };
        }
        break;
      case "electronicPayments":
        if (subMenu === "bankTransfer") {
          return {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "Bank Transfers",
                data: [120, 160, 140, 220, 200],
                borderColor: "rgba(rgb(255, 255, 255)",
                fill: false,
              },
              {
                label: "Deposits",
                data: [90, 130, 110, 180, 160],
                borderColor: "rgb(0, 0, 0)",
                fill: false,
              },
            ],
          };
        }
        break;
      case "mobilePayments":
        if (subMenu === "digitalWallet") {
          return {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "Digital Wallet Payments",
                data: [150, 180, 160, 230, 210],
                borderColor: "rgb(255, 255, 255)",
                fill: false,
              },
              {
                label: "QR Code Payments",
                data: [50, 70, 60, 100, 90],
                borderColor: "rgb(0, 0, 0)",
                fill: false,
              },
            ],
          };
        }
        break;
      case "pointOfSale":
        if (subMenu === "buyNowPayLater") {
          return {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "Buy Now Pay Later",
                data: [100, 140, 120, 180, 160],
                borderColor: "rgb(255, 255, 255)",
                fill: false,
              },
              {
                label: "Installment Payments",
                data: [110, 160, 140, 200, 180],
                borderColor: "rgb(0, 0, 0)",
                fill: false,
              },
            ],
          };
        };
        break;
        case "others":
        if (subMenu === "subscriptionBilling") {
          return {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "suscbscription based billing",
                data: [100, 140, 120, 180, 160],
                borderColor: "rgb(255, 255, 255)",
                fill: false,
              },
              {
                label: "QR Code Payments",
                data: [110, 160, 140, 200, 180],
                borderColor: "rgb(0, 0, 0)",
                fill: false,
              },
            ],
          };
        }
        break;
      default:
        return null;
    }
  };
  

  const getPaymentContent = (type, subMenu) => {
    if (!type || !subMenu) {
      return <h3>Please select a valid payment type and submenu.</h3>;
    }
  
    switch (type) {
      case "cashBased":
        return (
          <>
            <h3>Cash Based Payments</h3>
            {subMenu === "cash" && (
              <div className={styles.containerName}>
                <Line data={getGraphData("cashBased", "cash")} options={{ responsive: true}} />
              </div>
            )}
          </>
        );
      case "cardBased":
        return (
          <>
            <h3>Card Based Payments</h3>
            {subMenu === "creditCards" && (
              <div className={styles.containerName}>
                <Line data={getGraphData("cardBased", "creditCards")} options={{ responsive: true}} />
              </div>
            )}
          </>
        );
      case "electronicPayments":
        return (
          <>
            <h3>Electronic Payments</h3>
            {subMenu === "bankTransfer" && (
              <div className={styles.containerName}>
                <Line data={getGraphData("electronicPayments", "bankTransfer")} options={{ responsive: true}} />
              </div>
            )}
          </>
        );
      case "mobilePayments":
        return (
          <>
            <h3>Mobile Payments</h3>
            {subMenu === "digitalWallet" && (
              <div className={styles.containerName}>
                <Line data={getGraphData("mobilePayments", "digitalWallet")} options={{ responsive: true}} />
              </div>
            )}
          </>
        );
      case "pointOfSale":
        return (
          <>
            <h3>Point of Sale Financing</h3>
            {subMenu === "buyNowPayLater" && (
              <div className={styles.containerName}>
                <Line data={getGraphData("pointOfSale", "buyNowPayLater")} options={{ responsive: true}} />
              </div>
            )}
          </>
        );
        case "others":
        return (
          <>
            <h3>Others</h3>
            {subMenu === "subscriptionBilling" && (
              <div className={styles.containerName}>
                <Line data={getGraphData("others", "subscriptionBilling")} options={{ responsive: true}} />
              </div>
            )}
          </>
        );
      default:
        return <h3>Select a payment method to view details</h3>;
    }
  };
  

  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Payment Modes</h2>
        {getPaymentContent(paymentType, subMenuType)}
      </div>
    </div>
  );
};

export default Payments;
