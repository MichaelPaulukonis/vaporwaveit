var effectsPile = [];

function addGrayscaleEffect(rShift, gShift, bShift)
{
    var effect = {
        type: "grayscale",
        rShift: rShift,
        gShift: gShift,
        bShift: bShift
    };
    effectsPile.push(effect);
}

function addRandomEffect(opacity)
{
    var effect = {
        type: "random",
        opacity: opacity
    };
    effectsPile.push(effect);
}

function resetCanvasWithOriginalImg ()
{
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, xImg, yImg);
    console.log("Cleared img");
}

function applyEffects ()
{
    resetCanvasWithOriginalImg();

    for (var i = 0; i < effectsPile.length; i++) {
        var effect = effectsPile[i];

        switch (effect.type)
        {
            case "grayscale":
                grayscale(effect.rShift, effect.gShift, effect.bShift);
                break;

            case "random":
                random(effect.opacity);
                break;
        }
    }

    console.log(effectsPile);
}

function showEffects ()
{
    effectsList.innerHTML = "";

    for (var i = 0; i < effectsPile.length; i++) {
        var effect = effectsPile[i];

        switch (effect.type) {
            case "grayscale":
                effectsList.innerHTML += "<li>Grayscale ; " + effect.rShift + " ; " + effect.gShift + " ; " + effect.bShift + "<button class='deleteBtn' onclick='deleteEffect(" + i + ")'>X</button></li>";
                break;

            case "random":
                effectsList.innerHTML += "<li>Random ; " + effect.opacity + "<button class='deleteBtn' onclick='deleteEffect(" + i + ")'>X</button></li>";
                break;
        }
    }
}

function deleteEffect(numero)
{
    effectsPile.splice(numero, 1);
    applyEffects();
    showEffects();
}

function clearPile()
{
    effectsPile = [];
    showEffects();
}