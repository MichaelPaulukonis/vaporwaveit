function grayscale (rShift, gShift, bShift) {
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var pixels = imgData.data;

    for (var i = 0; i < pixels.length; i += 4) {
        var grayscale = pixels[i] * rShift + pixels[i+1] * gShift + pixels[i+2] * bShift;
        pixels[i] = grayscale;
        pixels[i+1] = grayscale;
        pixels[i+2] = grayscale;
    }

    ctx.putImageData(imgData, 0, 0);
}

// Average Grayscale : 0.33 ; 0.33 ; 0.33
// BT709 Grayscale : 0.2126 ; 0.7152 ; 0.0722
// BT601 Grayscale : 0.299 ; 0.587 ; 0.114


// Sources :
// https://www.htmlgoodies.com/html5/javascript/display-images-in-black-and-white-using-the-html5-canvas.html
// http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/