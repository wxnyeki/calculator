let history = [];

function calculate(operator){

let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);

let result;

if(operator === "+"){
result = num1 + num2;
}

else if(operator === "-"){
result = num1 - num2;
}

else if(operator === "*"){
result = num1 * num2;
}

else if(operator === "/"){

if(num2 === 0){
alert("Cannot divide by zero");
return;
}

result = num1 / num2;

}

document.getElementById("result").innerText = "Result: " + result;

history.push({
num1:num1,
num2:num2,
operator:operator,
result:result
});

}

function showHistory(){

let historyList = document.getElementById("history");
historyList.innerHTML = "";

if(history.length === 0){
historyList.innerHTML = "<li>No calculations yet</li>";
return;
}

history.forEach(function(item){

let li = document.createElement("li");

li.textContent =
item.num1 + " " +
item.operator + " " +
item.num2 + " = " +
item.result;

historyList.appendChild(li);

});

}
