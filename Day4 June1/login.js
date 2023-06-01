const typedEmail=document.getElementById("email");
const typedPassword=document.getElementById("password");
function submitData(){
    if((typedEmail.value != "") && (typedPassword.value != ""))
    {
        const obj={
            id: Date.now(),
            email:typedEmail.value,
            password:typedPassword.value
        };
        fetch("http://localhost:8080/myData",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            alert("Created account");
        })
        .catch((err)=>console.log(err));
    }
    else
    alert("Fill in all the fields");
}