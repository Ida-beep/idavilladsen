import React from "react";

function Contact(props) {
  const title = {
    //color: "white",
    display: "flex",
    justifyContent: "center",
    margin: "50px",
    color: "rgb(196, 196, 196)",
  };
  const page = {
    height: "100%",
    color: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const listStyle = {
    listStyle: "none",
    marginRight: "30px",
  };

  return (
    <>
      <div style={page}>
        <h5 style={title}>Get in touch</h5>
        {/* <h2>Get in touch</h2> */}
        <ul style={listStyle}>
          <li>Email {">"} idvi@itu.com</li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
