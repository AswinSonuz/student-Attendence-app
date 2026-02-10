function registerStudent(){

  const name = document.getElementById("name").value;
  const group = document.getElementById("group").value;

  if(name === "" || group === ""){
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentGroup", group);
  localStorage.setItem("studentRegistered", "true");

  window.location.href = "scanner.html";
}
