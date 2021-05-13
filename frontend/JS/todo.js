var arr = []

function name() {
    var k = document.getElementById("c").value;
    arr.push(k);
    var j = document.getElementById("fill");
    var m;
    for (let i = 0; i < arr.length; i++)
        m = m + arr[i];
    m = "Vra"
    j.innerHTML = m
}

function showdata() {
    var j = document.getElementById("fill");
    var m;
    for (let i = 0; i < arr.length; i++)
        m = m + arr[i];
    j.innerHTML = m
}