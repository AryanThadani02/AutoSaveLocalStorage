const textArea = document.querySelector("textarea");

function saveToLocal(){
  localStorage.setItem("storedData",textArea.value)
}
if(localStorage.getItem("storedData")){
  textArea.value=localStorage.getItem("storedData")
}
textArea.addEventListener("input",saveToLocal);