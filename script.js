const validQR = "MPOWER_ATTENDANCE_2026"; // change daily

const resultBox = document.getElementById("result");
const errorBox = document.getElementById("error");
const timeText = document.getElementById("time");

function onScanSuccess(decodedText) {
  if (decodedText === validQR) {
    const now = new Date().toLocaleString();
    timeText.innerText = `Marked at: ${now}`;
    resultBox.classList.remove("hidden");
    errorBox.classList.add("hidden");
    html5QrcodeScanner.clear();
  } else {
    errorBox.classList.remove("hidden");
  }
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: 250 }
);

html5QrcodeScanner.render(onScanSuccess);
