const submit = document.getElementById("sub");
const dismisBtn = document.getElementById("dis");
const sucessmsg = document.getElementById("sucmsg");
const homeel = document.getElementById("home");
const invalidmsilmsg= document.getElementById("toggle");

const get = document.getElementById("mailget");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function checkMail(submit,sucessmsg,homeel) {
        sucessmsg.hidden=false;
        homeel.hidden=true;
        
        var val= get.value;
        document.getElementById("mailpost").innerText=val;
        get.value='';  
}
dismisBtn.addEventListener("click",()=>{
    sucessmsg.hidden=true;
    homeel.hidden=false;
    invalidmsilmsg.hidden=true;
    get.className="mailget";
    get.style.backgroundColor="transparent";
})
// get.value
submit.addEventListener("click",()=>{
if(emailPattern.test(get.value) ){
    // alert("true")
    checkMail(submit,sucessmsg,homeel);
    
}else{
    invalidmsilmsg.hidden=false;
    get.style.backgroundColor="pink";
    get.className="mailgetTog"
    
    // "hsl(4, 100%, 67%)";
}
});
window.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        if(emailPattern.test(get.value) ){
    // alert("true")
    checkMail(submit,sucessmsg,homeel);
    
}else{
    invalidmsilmsg.hidden=false;
    get.style.backgroundColor="pink";
    get.className="mailgetTog"
    
    // "hsl(4, 100%, 67%)";
}
    }
})