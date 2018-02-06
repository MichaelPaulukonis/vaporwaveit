// Instantiate and draw img
var img = new Image();
img.onload = function () {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0);
};
//img.src = "../resources/exemple.jpg";

// Read img
var file = document.getElementById("file");
var reader = new FileReader();

reader.onloadend = function () {
    img.src = reader.result;
};

file.onchange = function () {
    reader.readAsDataURL(file.files[0]);
};