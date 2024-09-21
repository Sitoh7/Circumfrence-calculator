const pi=3.14159
let radius;
let circumfrence;

document.getElementById("sub").onclick = function () {

radius = document.getElementById("rad").value;
radius = Number(radius);
 circumfrence = 2 * radius  * pi ;
 document.getElementById("Circ").innerHTML = circumfrence;

}