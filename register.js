function registerStudent(){

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;

  if(name === "" || roll === ""){
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentRoll", roll);
  localStorage.setItem("studentRegistered", "true");

  window.location.href = "scanner.html";
}
