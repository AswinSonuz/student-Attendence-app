const attendance = JSON.parse(localStorage.getItem("attendance")) || [];

const table = document.getElementById("attendanceTable");

if(attendance.length === 0){
  table.innerHTML = "<tr><td>No attendance data</td></tr>";
  return;
}

/* Get unique dates */
const dates = [...new Set(attendance.map(a => a.date))];

/* Get unique students */
const students = {};

attendance.forEach(a => {
  students[a.roll] = a.name;
});

/* Create table header */
let header = "<tr><th>Roll</th><th>Name</th>";

dates.forEach(d => {
  header += `<th>${d}</th>`;
});

header += "</tr>";
table.innerHTML += header;

/* Create rows */
Object.keys(students).forEach(roll => {

  let row = `<tr><td>${roll}</td><td>${students[roll]}</td>`;

  dates.forEach(date => {

    const present = attendance.some(a =>
      a.roll === roll && a.date === date
    );

    row += `<td>${present ? "✔" : "✖"}</td>`;
  });

  row += "</tr>";
  table.innerHTML += row;

});
