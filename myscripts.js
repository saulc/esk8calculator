
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
     var be = t*s*p*c;
    document.getElementById("batteryenergy").innerHTML = be;

    var kv =  document.getElementById("kv").value;
    var ef =  document.getElementById("eff").value;
    ef = ef/100;
    var poles =  document.getElementById("poles").value;
    poles = poles/2;
    var wheel =  document.getElementById("wheel").value;
    var mp =  document.getElementById("mp").value;
    var wp =  document.getElementById("wp").value;
    var ratio = wp/mp;
    text = s*t*kv;
    document.getElementById("motorrpm").innerHTML = text;
    text = s*t*kv*ef;
    document.getElementById("motorrpmload").innerHTML = text;
    text = s*t*kv*ef/ratio;
    document.getElementById("wheelrpm").innerHTML = text;
    document.getElementById("ratio").innerHTML = ratio.toFixed(2);
    text = s*t*kv*poles;
    document.getElementById("erpm").innerHTML = text;
    text = s*t*kv*ef*poles;
    document.getElementById("erpmload").innerHTML = text;
    var temp = wheel/1000000 *3.14159 *60
    text = temp * s*t*kv*ef/ratio ;
    document.getElementById("speedk").innerHTML = text.toFixed(2);
    text = text*.6214;
    document.getElementById("speed").innerHTML = text.toFixed(2);
    var wpm = document.getElementById("wpm").value;
    var range = be/wpm;
     document.getElementById("range").innerHTML = range.toFixed(2);
    
}
