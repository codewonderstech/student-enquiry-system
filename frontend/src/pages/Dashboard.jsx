import React from "react";
import Table from "../components/Table";

function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h1>Student Enquiry Dashboard</h1>
        <p>Manage student enquiries efficiently</p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Search student..."
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <Table />
      </div>
    </div>
  );
}

export default Dashboard;