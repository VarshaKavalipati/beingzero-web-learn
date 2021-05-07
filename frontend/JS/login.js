function makechange() {
    var x = document.getElementById("username");
    var y = document.getElementById("pwd");
    var k = document.getElementById("Action");
    var p = "Your username is: " + x.value + " and the password is: " + y.value + ".";
    k.innerHTML = p;
}