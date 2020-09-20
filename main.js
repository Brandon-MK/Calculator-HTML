var btns = document.getElementsByTagName("Button");
var calc = document.getElementById("calc");

for (var thisBtn of btns) {
  thisBtn.addEventListener("click", function () {
    if (this.innerHTML == "=") calc.value = eval(calc.value);
    else if (this.innerHTML == "C") calc.value = "";
    else calc.value += this.innerHTML;
  });
}
