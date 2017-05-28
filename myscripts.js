
function calc() {
	var t =  document.getElementById("type").value;
    var s =  document.getElementById("scells").value;
    var p =  document.getElementById("pcells").value;
    var c =  document.getElementById("cc").value;
    var text = s + "s" + p +"p " + (c*p) + "Ah";
    document.getElementById("batteryinfo").innerHTML = text;
    text = t*s;
    document.getElementById("batteryvol").innerHTML = text;
     text = p*c;
    document.getElementById("batterycap").innerHTML = text;
     text = t*s*p*c;
    document.getElementById("batteryenergy").innerHTML = text;
}
