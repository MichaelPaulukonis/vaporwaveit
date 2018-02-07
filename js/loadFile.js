// Img Loading Script

function loadFile () {
    // Instantiate and draw img
    var imgLoaded = new Image();
    imgLoaded.onload = function () {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(imgLoaded, 0, 0);
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