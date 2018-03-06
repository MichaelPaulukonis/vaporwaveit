/* chromaticAberration.js
Contains the chromatic aberration algorithm */

function chromaticAberration () {
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var pixels = imgData.data;

    //var originBlue = pixels[i+2];

    var rShift = 5;
    var gShift = -5;

    for (var x = 0; x < c.width; x ++) {
        for (var y = 0; y < c.height; y++) {
            if (y + gShift < c.height && x + gShift < c.width) {
                var originGreen = pixels[y * (c.width * 4) + x * 4 + 1];

                pixels[(y + gShift) * (c.width * 4) + (x + gShift) * 4] = pixels[(y + gShift) * (c.width * 4) + (x + gShift) * 4];
                pixels[(y + gShift) * (c.width * 4) + (x + gShift) * 4 + 1] = 0.5 * originGreen + 0.5 * pixels[(y + gShift) * (c.width * 4) + (x + gShift) * 4 + 1];
                pixels[(y + gShift) * (c.width * 4) + (x + gShift) * 4 + 2] = pixels[(y + gShift) * (c.width * 4) + (x + gShift) * 4 + 2];
                pixels[(y + gShift) * (c.width * 4) + (x + gShift) * 4 + 3] = 255;
            }
        }
    }

    for (var x = 0; x < c.width; x ++) {
        for (var y = 0; y < c.height; y++) {
            if (x + rShift < c.width) {
                var originRed = pixels[y * (c.width * 4) + x * 4];

                pixels[y * (c.width * 4) + (x + rShift) * 4] =  0.5 * originRed + 0.5 * pixels[y * (c.width * 4) + (x + rShift) * 4];
                pixels[y * (c.width * 4) + (x + rShift) * 4 + 1] = pixels[y * (c.width * 4) + (x + rShift) * 4 + 1];
                pixels[y * (c.width * 4) + (x + rShift) * 4 + 2] = pixels[y * (c.width * 4) + (x + rShift) * 4 + 2];
                pixels[y * (c.width * 4) + (x + rShift) * 4 + 3] = 255;
            }
        }
    }


    /*for (var i = 0; i < pixels.length; i += 4) {

        var originRed = pixels[i];
        //var originGreen = pixels[i+1];
        //var originBlue = pixels[i+2];

        if (i + rShift >= 0 && i + rShift < pixels.length) {
            pixels[i + rShift*4] = 0.5 * originRed + 0.5 * pixels[i + rShift*4];
            pixels[i + rShift*4 + 1] = pixels[i + rShift*4 + 1];
            pixels[i + rShift*4 + 2] = pixels[i + rShift*4 + 2];
            pixels[i + rShift*4 + 3] = 255;
        }
    }*/

    ctx.putImageData(imgData, 0, 0);
}