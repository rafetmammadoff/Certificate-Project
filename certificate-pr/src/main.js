import { logDOM } from "@testing-library/react";

document.addEventListener("DOMContentLoaded", function(e) {

    var circle=document.getElementsByClassName("box-b2")
    for (let i = 0; i < circle.length; i++) {
        const element = circle[i];
        element.addEventListener('click',function(){
            element.classList.toggle("rafet")
          })
          
        
    }

});

