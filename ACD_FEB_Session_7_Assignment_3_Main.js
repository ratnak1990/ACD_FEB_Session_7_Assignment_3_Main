var ref=document.getElementById("getNumbers");
ref.addEventListener("keyup",acceptOnlyNumbers);
//ref.addEventListener("keyup",setPreviousValue);
function acceptOnlyNumbers(event){
    var x= event.which || event.keyCode;
    console.log(x);
    if(((x>=48)&&(x<=57)) || ((x>=96)&&(x<=105)))
        {
           
            document.getElementById("getNumbers").style.background="white";
                
            
        }
   
    else{
        
         document.getElementById("getNumbers").style.background="red";
            setPreviousValue();
    }
}

function setPreviousValue(){
    var val=document.getElementById('getNumbers').value;
    var length=val.length;
    console.log("Length= " + length);
    var newVal=val.substring(0,length-1);
    document.getElementById('getNumbers').value=newVal;
    //document.getElementById("getNumbers").style.background="white";
}



