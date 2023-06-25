function redirectToPage(){
    console.log("test")
    let a = document.getElementById("Username").value;
    if( a == "fuck"){
        window.location.href = '/src/server/index.html';
    }

}