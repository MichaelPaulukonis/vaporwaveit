/* utilities.js
This file will contain utilities methods to process the image and/or the canvas */

function getPixelId(pixels, x, y) {
    var firstId = y * c.width * 4 + x * 4;
    return [firstId, firstId + 1, firstId + 2, firstId + 3];
}