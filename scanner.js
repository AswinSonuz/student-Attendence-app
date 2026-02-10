const validQR = "MPOWER_" + new Date().toISOString().slice(0,10).replace(/-/g,"_");

const studentName = localStorage.getItem("studentName");
const studentRoll = localStorage.getItem("studentRoll");

if(!studentName){
  window.location.href = "register.html";
}

function onScanSuccess(decodedText){

  if(decodedText === validQR){

    const attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    attendance.push({
      name: studentName,
      roll: studentRoll,
      date: new Date().toISOString().slice(0,10),
      time: new Date().toLocaleTimeString()
    });

    localStorage.setItem("attendance", JSON.stringify(attendance));

    document.getElementById("status").innerText =
      "Attendance marked for " + studentName;

  }else{
    document.getElementById("status").innerText = "Invalid QR";
  }
}

const scanner = new Html5QrcodeScanner("reader",{fps:10,qrbox:250});
scanner.render(onScanSuccess);
