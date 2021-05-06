function onColorRangeChange() {
    let pE = document.getElementById("pColor");
    let rE = document.getElementById("reS");
    let gE = document.getElementById("greS");
    let bE = document.getElementById("bluS");
    let rgbprop = "rgb(" + rE.value + "," + gE.value + "," + bE.value + ")";
    pE.innerHTML = rgbprop;
    pE.style.backgroundColor = rgbprop;
    let a = document.getElementById("rv");
    let b = document.getElementById("gv");
    let c = document.getElementById("bv");
    a.innerHTML = rE.value;
    b.innerHTML = gE.value;
    c.innerHTML = bE.value;
}