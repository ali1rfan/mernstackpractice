function printContent(){
    var pe = document.getElementById("paragraph");
    pe.innerHTML="Today we are doing functions in JavaScript that can hide and show contents of a page upon clicking a button. 
    So here we have hidden this text to test our first program and see if its work. 
    If you see and dont see this then it works!";
    }
    function hideContent(){
    var hc = document.getElementById("paragraph");
    hc.innerHTML="";
    }