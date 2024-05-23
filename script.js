const menuArray = ["1 - Factorial", "2 - Triangle Number", "0 - Exit"];


// display array elements in to a div - normal method
// document.getElementById("arrayContainer").innerHTML = menuArray[0] + "<br>" + menuArray[1] + "<br>" + menuArray[2];


function showArray(){
    // display array elements using for loop / will be automatically added from the array
var arrayLength = menuArray.length;

var str = "";
for (let i=0; i<=arrayLength-1; i++){
    str = str+menuArray[i]+"<br>"; 
}

document.getElementById("arrayContainer").style.display='block';
document.getElementById("form").style.display='block';

document.getElementById("arrayContainer").innerHTML=str;

document.getElementById("form").innerHTML = `<input type="text" id="arrayValue">
<button onclick="eachMenu()">Submit</button>`
}



function eachMenu(){
    var menuValue = document.getElementById("arrayValue");
    if (menuValue.value == 1){
        document.getElementById("factResult").style.display = 'none'
        document.getElementById("menuButton").style.display='none';
        document.getElementById("form").style.display='none';
        document.getElementById("arrayContainer").style.display = 'none';
        document.getElementById("fact").style.display = 'block';
        document.getElementById("fact").innerHTML = `
        <h3>Calculate Factorial</h3>
            <input type="text" id="factorialInput">
            <button onclick="findFactorial()">Calculate</button>`
    }
    else if (menuValue.value ==2){
        document.getElementById("menuButton").style.display='none';
        document.getElementById("factResult").style.display='none';
        document.getElementById("form").style.display='none';
        document.getElementById("arrayContainer").style.display = 'none';
        document.getElementById("triangle").style.display = 'block';
        document.getElementById("triangle").innerHTML = `<h3>Calculate Triangle Number</h3><input type="text" id="inputTriangle"><button onclick="findTriangle()">Calculate</button>` 
    }
    else if (menuValue.value == 0){
        document.getElementById("menuButton").style.display='block';
        document.getElementById("form").style.display='none';
        document.getElementById("arrayContainer").style.display = 'none';
        document.getElementById("factResult").style.display = 'none';
    }
    else{
        alert("Wrong input");
    }
   

}

function findFactorial(){
var inputno = document.getElementById("factorialInput");
var factorial=1;

for (i=1; i<=inputno.value; i++){
    factorial=factorial*i;
}
document.getElementById("factResult").style.display = 'block';
document.getElementById("factResult").innerHTML = `<strong>factorial of ${inputno.value} is ${factorial}</strong><br><br>`;
document.getElementById("fact").style.display = 'none';
document.getElementById("arrayContainer").style.display = 'block';
document.getElementById("form").style.display='block';


}

function findTriangle(){
    var inputTri = document.getElementById("inputTriangle");
    let resultTri = inputTri.value*(inputTri.value+1)/2;
    document.getElementById("factResult").style.display='block';
    document.getElementById("factResult").innerHTML = `<strong>Triangle number of ${inputTri.value} is ${resultTri}</strong><br><br>`;
    document.getElementById("triangle").style.display = 'none';
    document.getElementById("arrayContainer").style.display = 'block';
    document.getElementById("form").style.display='block';
    
}


