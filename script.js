const menuArray = ["1 - Factorial", "2 - Triangle Number", "0 - Exit"];


// display array elements in to a div - normal method
document.getElementById("arrayContainer").innerHTML = menuArray[0] + "<br>" + menuArray[1] + "<br>" + menuArray[2];


// display array elements as document.write
// var arrayLength = menuArray.length;

// for (let i=0; i<=arrayLength-1; i++){
//     document.write(menuArray[i]+"<br>");
// }

var display = 0;
var arrayContainer = document.getElementById("container");
var submitForm = document.getElementById("form");

function hideAndShow(){
    if (display==1){
        arrayContainer.style.display ='block';
        submitsubmitFormForm.style.display ='block';
        display=0;
    }
    else{
        arrayContainer.style.display ='none';
        submitForm.style.display ='none';
        display=1;
    }
    
}



