/*
var image = document.getElementById('imagesch');
function PriSch() {
    image.src = "Images/pri4.jpg";
}
function SecSch() {
    image.src = "Images/sec4.jpeg";
}
*/

function imageChange() {
    var image = document.getElementById('imagesch');
    if (image.src == "Images/pri4.jpg") {
        image.src = "Images/sec4.jpeg";
    } else {
        image.src = "Images/pri4.jpg";
    }
}