const attendance = JSON.parse(localStorage.getItem("attendance")) || [];

const today = new Date().toISOString().slice(0,10);

const table = document.getElementById("attendanceTable");

/* Table Header */
table.innerHTML = `
<tr>
<th>Group</th>
<th>Name</th>
<th>Status</th>
</tr>
`;

/* Check each student */
students.forEach(student => {

  const present = attendance.some(a =>
    a.group === student.group && a.date === today
  );

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.group}</td>
    <td>${student.name}</td>
    <td>${present ? "✅ Present" : "❌ Absent"}</td>
  `;

  table.appendChild(row);

});

