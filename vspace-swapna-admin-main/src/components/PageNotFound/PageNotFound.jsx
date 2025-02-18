import React from "react"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>404 - Page Not Found</h1>
        <p style={styles.para}>
          Hmm, looks like you've lost your way. Click &nbsp;
          <FaHome /> &nbsp; to return to the home page.
        </p>
        <div style={styles.box}>
        <Link to="/home" style={styles.link}>
          <FaHome />
        </Link>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    height: "100dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#3AAFA9",
  },
  header: {
    fontSize: "5rem",
    color: "white",
  },
  para: {
    fontSize: "1.4rem",
    color: "white",
  },
  link: {
    color: "black",
    fontSize: 30,
    marginBottom: '5px'
  },
  box: {
    height: '50px',
    width: '50px',
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default PageNotFound
