var toggle = 0
function toggleTools(){
    var element = document.getElementById("tools");
    if(toggle == 0){
        toggle = 1
  element.classList.add("d-none");
    } else{
        toggle = 0
        element.classList.remove("d-none");
    }
}