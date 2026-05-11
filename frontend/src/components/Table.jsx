import React from "react";

function Table() {
  const enquiries = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      course: "React Development",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@gmail.com",
      course: "Python Full Stack",
      status: "Completed",
    },
    {
      id: 3,
      name: "Aman Gupta",
      email: "aman@gmail.com",
      course: "Flask Backend",
      status: "Pending",
    },
  ];

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#2563eb", color: "white" }}>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Course</th>
          <th style={styles.th}>Status</th>
        </tr>
      </thead>

      <tbody>
        {enquiries.map((item) => (
          <tr key={item.id}>
            <td style={styles.td}>{item.id}</td>
            <td style={styles.td}>{item.name}</td>
            <td style={styles.td}>{item.email}</td>
            <td style={styles.td}>{item.course}</td>
            <td style={styles.td}>
              <span
                style={{
                  backgroundColor:
                    item.status === "Completed" ? "green" : "orange",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  th: {
    padding: "15px",
    textAlign: "left",
  },

  td: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
  },
};

export default Table;