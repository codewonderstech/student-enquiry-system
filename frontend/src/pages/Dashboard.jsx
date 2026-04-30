import React, { useState } from "react";
import Table from "../components/Table";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const students = [
    { id: 1, name: "Rohan Sharma", course: "React" },
    { id: 2, name: "Neha Patil", course: "Python" },
    { id: 3, name: "Karan Verma", course: "Flask" },
    { id: 4, name: "Pooja Singh", course: "Java" },
    { id: 5, name: "Amit Joshi", course: "React" }
  ];

  let filteredData = students.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (courseFilter !== "All") {
    filteredData = filteredData.filter(
      (item) => item.course === courseFilter
    );
  }

  filteredData.sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={courseFilter}
        onChange={(e) => setCourseFilter(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option>All</option>
        <option>React</option>
        <option>Python</option>
        <option>Java</option>
        <option>Flask</option>
      </select>

      <button
        onClick={() =>
          setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        }
        style={{ marginLeft: "10px" }}
      >
        Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>

      <br /><br />

      <Table data={filteredData} />
    </div>
  );
}

export default Dashboard;