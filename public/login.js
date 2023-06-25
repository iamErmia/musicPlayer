function redirectToPage(){
    console.log("test")
    let a = document.getElementById("Username").value;
    let b = document.getElementById("password").value;
    if( ((a == "Moein") || (a=="Ermia")) && b == "85856969" ){
        window.location.href = '/player';
    }else{
        alert("bitch!! insert the right Username and password.")
    }

}