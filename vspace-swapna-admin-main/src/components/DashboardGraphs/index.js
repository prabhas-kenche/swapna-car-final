import React from "react"
import { Line, Bar } from "react-chartjs-2"
import styles from "./index.module.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

const DashboardGraphs = () => {
  const workflowData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Workflow",
        data: [10, 15, 9, 20, 18, 22, 15, 25, 20, 30, 28, 35],
        borderColor: "#def2f1",
        backgroundColor: "rgba(0, 184, 148, 0.2)",
        fill: true,
      },
    ],
  }

  const marketingData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Marketing",
        data: [5, 10, 15, 8, 20, 18, 25, 30, 35, 40, 45, 50],
        backgroundColor: "#feffff",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>Recent Workflow</h3>
        <Line data={workflowData} options={options} />
      </div>
      <div className={styles.box}>
        <h3>Recent Marketing</h3>
        <Bar data={marketingData} options={options} />
      </div>
    </div>
  )
}

export default DashboardGraphs
