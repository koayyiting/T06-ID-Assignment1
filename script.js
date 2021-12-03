function imageChange() {
    var image = document.getElementById('imagesch');
    if (image.src == "images/pri4.jpg") {
        image.src = "images/sec4.jpeg";
    } else {
        image.src = "images/pri4.jpg";
    }
}