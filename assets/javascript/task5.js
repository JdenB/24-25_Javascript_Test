/* Put code for the task below */
function inputboxcolourchange(id) {
    document.getElementById(id)
        .addEventListener("input", (event) => inputboxcolourchange(id));
    if(document. getElementById(id).value === "")  {
    document.getElementById(id).style.backgroundColor = "red";
}
    else {
    document.getElementById(id).style.backgroundColor = "white";
}

}
function submit(){
    inputboxcolourchange('fullName')
    inputboxcolourchange('address')
    inputboxcolourchange('phone')
    inputboxcolourchange('email')
}