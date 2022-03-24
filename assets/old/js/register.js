function saveData(){
    let lastName,firstName,email,psw;
    firstName=document.getElementById("firstName").value;
    lastName=document.getElementById("lastName").value;
    email=document.getElementById("email").value;
    psw=document.getElementById("psw").value;
            
    localStorage.setItem("firstName",firstName)
    localStorage.setItem("lastName",lastName)
    localStorage.setItem("email",email)
    localStorage.setItem("psw",psw)
}