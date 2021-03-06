
function calc() {
	var t =  document.getElementById("type").value;
    var s =  document.getElementById("scells").value;
    var p =  document.getElementById("pcells").value;
    var c =  document.getElementById("cc").value;
    var mda =  document.getElementById("mda").value;
    var mdc =  document.getElementById("mdc").value;
    var da =  document.getElementById("da").value;
    var dc =  document.getElementById("dc").value;
    var ca =  document.getElementById("chargeA").value;
    var chc =  document.getElementById("chargeC").value;
    var usec = document.getElementById("usec").checked;
    
     var usekg = document.getElementById("usekg").checked;

     if(usekg){
        var weightkg =  document.getElementById("rwk").value;
        document.getElementById("rw").value = (weightkg *2.2).toFixed(0);
        var bweightkg =  document.getElementById("bwk").value;
        document.getElementById("bw").value = (bweightkg *2.2).toFixed(0);
         document.getElementById("rw").disabled = true;
         document.getElementById("rwk").disabled = false;
         document.getElementById("bw").disabled = true;
         document.getElementById("bwk").disabled = false;
        

    }else{

        var weight =  document.getElementById("rw").value;
        document.getElementById("rwk").value = (weight / 2.2).toFixed(0);
        var bweight =  document.getElementById("bw").value;
        document.getElementById("bwk").value = (bweight / 2.2).toFixed(0);
        document.getElementById("rw").disabled = false;
        document.getElementById("rwk").disabled = true;
        document.getElementById("bw").disabled = false;
        document.getElementById("bwk").disabled = true;
       
    }


        document.getElementById("mdc").disabled = !usec;
        document.getElementById("dc").disabled = !usec;
        document.getElementById("chargeC").disabled = !usec;

        document.getElementById("mda").disabled = usec;
        document.getElementById("da").disabled = usec;
        document.getElementById("chargeA").disabled = usec;
   
    if(!usec){
    document.getElementById("md").innerHTML = (mda * p).toFixed(2);
    document.getElementById("mdc").value = mda/c;

    document.getElementById("cd").innerHTML = (da * p).toFixed(2);
    document.getElementById("dc").value = da/c;

    document.getElementById("mc").innerHTML = (ca * p).toFixed(2);
    document.getElementById("chargeC").value = ca/c;

    document.getElementById("mc").innerHTML = (ca * p).toFixed(2);
    document.getElementById("chargeC").value = ca/c;

    document.getElementById("mct").innerHTML = ((c)/ca).toFixed(2);
    }
    else{
    document.getElementById("md").innerHTML = (mdc*c * p).toFixed(2);
    document.getElementById("mda").value = mdc*c;
    
    document.getElementById("cd").innerHTML = (dc*c * p).toFixed(2);
    document.getElementById("da").value = dc*c;
    
    document.getElementById("mc").innerHTML = (chc*c * p).toFixed(2);
    document.getElementById("chargeA").value = chc*c;
    
    document.getElementById("mct").innerHTML = ((1)/chc).toFixed(2);
    }

    

    var text = s + "s" + p +"p " + (c*p).toFixed(2) + "Ah";
    document.getElementById("batteryinfo").innerHTML = text;
    text = t*s;
    document.getElementById("batteryvol").innerHTML = text.toFixed(2);
     text = p*c;
    document.getElementById("batterycap").innerHTML = text.toFixed(2);
     var be = t*s*p*c;
    document.getElementById("batteryenergy").innerHTML = be.toFixed(2);
    text = t*s*mda*p;
    document.getElementById("batterypower").innerHTML = text.toFixed(2);
    var battpower = t*s*da*p;
    document.getElementById("contbatterypower").innerHTML = battpower.toFixed(2);

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
    var vk = temp * s*t*kv*ef/ratio ;
    document.getElementById("speedk").innerHTML = vk.toFixed(2);
    text = vk*.6214;
    document.getElementById("speed").innerHTML = text.toFixed(2);
    var wpm = document.getElementById("wpm").value;
    var range = be/wpm;
     document.getElementById("range").innerHTML = range.toFixed(2);
     range = range*1.609344;
      document.getElementById("rangek").innerHTML = range.toFixed(2);

      // hill grade calc
        var bmss =  document.getElementById("bwk").value;
        var mss =  document.getElementById("rwk").value;
        bmss = parseInt(bmss);
        mss = parseInt(mss);
         mss = (bmss + mss);
      //km / hr to ms/s
      vk = vk / 60 / 60;
      vk = vk*1000;
      var ti = battpower / (mss * 9.8 * vk);
      ti = ti * 100;
    
     // ti = b;
   // document.getElementById("batteryinfo").innerHTML = mss;

    
    document.getElementById("hillgrade").innerHTML = ti.toFixed(0);

    
}

//cope function https://gist.github.com/bitboxx/8402000
// // converts HTML to text using Javascript
//returns undefined?
// function html2text(html) {
//     var tag = document.createElement('div');
//     tag.innerHTML = html;
    
//     return tag.innerText;
// }

// converts HTML to text using Javascript
function html2text(html) {
    var tag = document.createElement('div');
    tag.innerHTML = document.getElementById('main').innerHTML;
    
        var tx = tag.innerText;

         tx.replace("  "^/^\s*[\r\n]/gm, "");

    return tag.innerText;
}

//copy code from https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript

function copyTextToClipboard(text) {
 // var textArea = document.createElement("textarea");
  //document.body.appendChild(textArea);
  var textArea = document.getElementById("textarea");


  textArea.value = text;
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

 // document.body.removeChild(textArea);
}


var copyBobBtn = document.querySelector('.js-copy-bob-btn');

    copyBobBtn.addEventListener('click', function(event) {
    var temp = html2text();
  copyTextToClipboard(temp);
});



