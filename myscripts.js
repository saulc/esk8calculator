
function calc() {
	var t =  document.getElementById("type").value;
    var s =  document.getElementById("scells").value;
    var p =  document.getElementById("pcells").value;
    var c =  document.getElementById("cc").value;
    var text = s + "s" + p +"p " + (c*p).toFixed(2) + "Ah";
    document.getElementById("batteryinfo").innerHTML = text;
    text = t*s;
    document.getElementById("batteryvol").innerHTML = text.toFixed(2);
     text = p*c;
    document.getElementById("batterycap").innerHTML = text.toFixed(2);
     var be = t*s*p*c;
    document.getElementById("batteryenergy").innerHTML = be.toFixed(2);

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
    document.getElementById("motorrpm").innerHTML = text.toFixed(2);
    text = s*t*kv*ef;
    document.getElementById("motorrpmload").innerHTML = text.toFixed(2);
    text = s*t*kv*ef/ratio;
    document.getElementById("wheelrpm").innerHTML = text.toFixed(2);
    document.getElementById("ratio").innerHTML = ratio.toFixed(2);
    text = s*t*kv*poles;
    document.getElementById("erpm").innerHTML = text.toFixed(2);
    text = s*t*kv*ef*poles;
    document.getElementById("erpmload").innerHTML = text.toFixed(2);
    var temp = wheel/1000000 *3.14159 *60
    text = temp * s*t*kv*ef/ratio ;
    document.getElementById("speedk").innerHTML = text.toFixed(2);
    text = text*.6214;
    document.getElementById("speed").innerHTML = text.toFixed(2);
    var wpm = document.getElementById("wpm").value;
    var range = be/wpm;
     document.getElementById("range").innerHTML = range.toFixed(2);
     range = range*1.609344;
      document.getElementById("rangek").innerHTML = range.toFixed(2);
    
}
