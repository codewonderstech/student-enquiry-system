import React from "react";

function Table({ data }) {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        borderCollapse: "collapse",
        width: "100%",
        textAlign: "left"
      }}
    >
      <thead style={{ backgroundColor: "#f2f2f2" }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" style={{ textAlign: "center" }}>
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;