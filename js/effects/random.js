function random (opacity) {
    var imgData = ctx.getImageData(xImg, yImg, wImg, hImg);
    var pixels = imgData.data;

    for (var i = 0; i < pixels.length; i += 4) {
        pixels[i] = (1 - opacity) * pixels[i] + opacity * Math.floor(Math.random() * 255);
        pixels[i+1] = (1 - opacity) * pixels[i+1] + opacity * Math.floor(Math.random() * 255);
        pixels[i+2] = (1 - opacity) * pixels[i+2] + opacity * Math.floor(Math.random() * 255);
        pixels[i+3] = 255;
    }

    ctx.putImageData(imgData, xImg, yImg);
}