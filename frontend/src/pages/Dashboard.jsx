import React, { useState } from "react";
import Table from "../components/Table";

function Dashboard() {
  const [search, setSearch] = useState("");

  const students = [
    { id: 1, name: "Rohan Sharma", course: "React" },
    { id: 2, name: "Neha Patil", course: "Python" },
    { id: 3, name: "Karan Verma", course: "Flask" },
    { id: 4, name: "Pooja Singh", course: "Java" },
    { id: 5, name: "Amit Joshi", course: "React" },
    { id: 6, name: "Sneha Kulkarni", course: "Python" },
    { id: 7, name: "Vikas Rao", course: "Node JS" },
    { id: 8, name: "Priya Mehta", course: "React" },
    { id: 9, name: "Aditya More", course: "Java" },
    { id: 10, name: "Komal Desai", course: "Flask" }
  ];

  const filteredData = students.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid gray"
        }}
      />

      <Table data={filteredData} />
    </div>
  );
}

export default Dashboard;