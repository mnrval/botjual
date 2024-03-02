import spin from 'spinnies'

var spinner = { 
"interval": 600,
"frames": [
"",
"Na",
"Nas ",
"Nask B",
"Nasky Bo M",
"Nasky Bot MD ",
"Nasky Bot M",
"Nasky Bo ",
"Nasky B",
"Nas",
"Na",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'red', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
function startt(id, text) {
spins.add(id, {text: text})
}

export  {
startt
}