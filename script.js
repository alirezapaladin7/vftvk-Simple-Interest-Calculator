var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.reteShow');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue); 

function compute()
{
    



    Amount = parseInt(document.getElementById("principal").value,10);
    InterestRate=parseInt(document.getElementById("rate").value,10);
    NoOfYear=parseInt(document.getElementById("years").value,10);

    InterestCalculator=Amount*NoOfYear*InterestRate/100

    document.getElementById('result').innerHTML=InterestCalculator
    
    window.console.log(Amount)
    window.console.log(InterestRate)
    window.console.log(NoOfYear)
    window.console.log(InterestCalculator)

}
```
function rateLiveShow(){
    window.console.log(InterestRate)
    document.getElementById("reteShow").innerHTML=document.getElementById("rate").value

}
```