function chromaticAberration () {
    var imgData = ctx.getImageData(xImg, yImg, wImg, hImg);
    var pixels = imgData.data;

    var rShift = 2;
    var gShift = -2;

    for (var i = 0; i < pixels.length; i += 4) {
        if (i + gShift >= 0 && i + gShift < pixels.length) {
            var originGreen = pixels[i+1];
            //var originBlue = pixels[i+2];

            pixels[i + gShift*4] = 0.1 * originGreen + 0.9 * pixels[i + gShift*4];
            pixels[i + gShift*4 + 1] = pixels[i + gShift*4 + 1];
            pixels[i + gShift*4 + 2] = pixels[i + gShift*4 + 2];
            pixels[i + gShift*4 + 3] = 150;
        }
    }

    for (var i = 0; i < pixels.length; i += 4) {
        if (i + rShift >= 0 && i + rShift < pixels.length) {
            var originRed = pixels[i];
            //var originGreen = pixels[i+1];
            //var originBlue = pixels[i+2];

            pixels[i + rShift*4] = 0.9 * originRed + 0.1 * pixels[i + rShift*4];
            pixels[i + rShift*4 + 1] = pixels[i + rShift*4 + 1];
            pixels[i + rShift*4 + 2] = pixels[i + rShift*4 + 2];
            pixels[i + rShift*4 + 3] = 255;
        }
    }

    ctx.putImageData(imgData, xImg, yImg);
}