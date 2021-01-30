alert('Choose a color then click anywhere in the background');
function myfunction() {
    var color = document.getElementById("favcolor").value;
    document.getElementById("fluid-container").style.backgroundColor = color;
    document.getElementById("button").style.backgroundColor = color;
}
