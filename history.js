const studentName = localStorage.getItem("studentName");
const studentRoll = localStorage.getItem("studentRoll");

const attendance = JSON.parse(localStorage.getItem("attendance")) || [];

const table = document.getElementById("attendanceTable");
const total = document.getElementById("total");

document.getElementById("studentInfo").innerText =
  `${studentName} (${studentRoll})`;

let count = 0;

attendance.forEach(record => {

  if(record.roll === studentRoll){

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${record.date}</td>
      <td>${record.time}</td>
    `;

    table.appendChild(row);
    count++;

  }

});

total.innerText = "Total Attendance: " + count;
