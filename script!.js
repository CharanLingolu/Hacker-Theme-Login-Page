document.getElementById("submitbtn").addEventListener("click", function() {
    event.preventDefault();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();
    let messageElement=document.getElementById("message");

    if(email.trim()&&password.trim()!=""){
    messageElement.innerText="Login Successful";
    setTimeout(function() {
        messageElement.innerText=""},2000);
    }
    else{
        messageElement.innerText="please enter email and password";
        setTimeout(function() {
            document.getElementById("message").innerText=""},2000);
    }    
});
    document.getElementById("resetbtn").addEventListener("click", function() {
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        document.getElementById("message").innerText="";
    });