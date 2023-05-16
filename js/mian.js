"use strict";


// Settings Part
document.querySelector("#btn-settings").addEventListener("click",function(){
    document.querySelector(".settings > .parent").classList.toggle("active");
    this.children[0].classList.toggle("fa-spin");
})






// Section 2 
function removeActiveClassFromButtons()
{
    document.querySelectorAll(".duration .parent > .item button").forEach( (element)=>{
        element.classList.remove("active");
        element.nextElementSibling.style.height = "0px";
    });
};


document.querySelectorAll(".duration .parent > .item button").forEach((e)=>{
    e.addEventListener("click",function(){

        if(!this.classList.contains("active"))
        {
            removeActiveClassFromButtons();
            this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + "px";
            this.classList.toggle("active");
        }
        else 
        {
            this.nextElementSibling.style.height = "0px";
            this.classList.toggle("active");
        }
    })
})






// Event Section 
let event = setInterval(() =>{

    const day = document.querySelector("#day");
    const hour = document.querySelector("#hour");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");

    let date = new Date().getTime();
    let eventDate = new Date("2023-04-10T00:00:00Z").getTime();
    let dateShow = eventDate - date ;


    let dayS = Math.floor((dateShow / 1000 / 60 / 60 / 24));
    let hourS = Math.floor((dateShow / 1000 / 60 / 60 / 24) * 24);
    let minuteS = Math.floor((dateShow / 1000 / 60 ) - (hourS * 60));
    let secondS = Math.floor(  (dateShow / 1000 ) - ((dayS * 24 * 60 * 60) + ( ((hourS) - (dayS * 24))*60*60 ) + (minuteS * 60)));
    

    day.innerHTML = (dayS) + " D";
    hour.innerHTML = (hourS) - (dayS * 24) + " h";
    minute.innerHTML = (minuteS) + " m";
    second.innerHTML = (secondS) + " s";


},1000);



// Last Section 
function countAvailableInMessageField()
{
    const userMessage = document.getElementById("user-message");
    let messageLength = userMessage.value.length;
    if(messageLength >= 0 && messageLength <= 100)
        document.getElementById("count-available").innerHTML = 100 - messageLength;
    else
        userMessage.value = userMessage.value.slice(0,100)  
}
document.getElementById("user-message").addEventListener("input",()=>{
    countAvailableInMessageField();
})