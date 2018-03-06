/* loadFile.js
Manages the image loading and handling on the canvas*/

function loadFile () {
    // Instantiate and draw img
    var imgLoaded = new Image();
    imgLoaded.onload = function () {

        fileBtn.innerHTML = "";
        ctx.clearRect(0, 0, c.width, c.height);
        firstDrawImg(imgLoaded);
        //ctx.drawImage(imgLoaded, 0, 0);
    };
//img.src = "../resources/exemple.jpg";

// Read img
    var file = document.getElementById("file");
    var reader = new FileReader();

    reader.onloadend = function () {
        imgLoaded.src = reader.result;
    };

    file.onchange = function () {
        reader.readAsDataURL(file.files[0]);
    };

    return imgLoaded;
}
// https://stackoverflow.com/questions/1445862/possible-to-use-html-images-like-canvas-with-getimagedata-putimagedata

function firstDrawImg(img)
{
    c.width = img.width;
    c.height = img.height;

    ctx.drawImage(img, 0, 0);
}

function clear()
{
    ctx.clearRect(0, 0, c.width, c.height);
    clearPile();
    fileBtn.innerHTML="<input id=\"file\" type=\"file\"><label id=\"fileLabel\" for=\"file\">Upload file</label>";
    img = loadFile();
}
