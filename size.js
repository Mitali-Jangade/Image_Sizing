let errorMsgEl = document.getElementById("errorMsg");
let changeImgEl = document.getElementById("changeImg");
let widthEl = document.getElementById("width");

let counter = 300;
let result = true;

function minus(){
   
    if(counter < 280 )
        {
             errorMsgEl.textContent = " Can't Visible. Increase the size of image";
             
        
        }
        else{
         errorMsgEl.textContent = "";  
         counter = counter - 5;
         widthEl.textContent = counter;
         changeImgEl.style.width = counter + "px";
        }
        
   
}

function plus(){
    
        if(counter > 350)
            {
                errorMsgEl.textContent = " Too Big. Decrease the size of image";
           
            }
            else{
            errorMsgEl.textContent = "";
            counter = counter + 5;
            widthEl.textContent = counter;
            changeImgEl.style.width = counter + "px";
            }
            
    
}
