function blackAndWhiteIt (c, ctx) {
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var pixels = imgData.data;

    for (var i = 0; i < pixels.length; i += 4) {
        var grayscale = pixels[i] * .59 + pixels[i+1] * .3 + pixels[i+2] * 0.11;
        pixels[i] = grayscale; // red
        pixels[i+1] = grayscale; // green
        pixels[i+2] = grayscale; // blue
        //pixels[i+3] = 1; // alpha
    }

    ctx.putImageData(imgData, 0, 0);
}

// Sources :
// https://www.htmlgoodies.com/html5/javascript/display-images-in-black-and-white-using-the-html5-canvas.html