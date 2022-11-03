import React from 'react'

const Footer = () => {
    const style = {
        gridColumn: "1 / span 3",
        gridRow: "3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginTop: "15px"
    }

  return (
    <footer className="bg-dark" style={style}>
        <small>Alejandro L. Herrero © - alejandrolhc@gmail.com</small>
    </footer>
  )
}

export default Footer