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

function addChromaticAberration()
{
    var effect = {
        type: "chromaticAberration"
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

            case "chromaticAberration":
                chromaticAberration();
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

        var upBtnHtml = "";
        var downBtnHtml = "";

        if (i != 0)
            upBtnHtml = "<button class='effectBtn upBtn' onclick='swapEffects(" + i + "," + (i-1) + ")'>^</button>";
        else
            upBtnHtml = "<button class='effectBtn upBtn' disabled>^</button>";

        if (i != effectsPile.length - 1)
            downBtnHtml = "<button class='effectBtn upBtn' onclick='swapEffects(" + i + "," + (i+1) + ")'>v</button>";
        else
            downBtnHtml = "<button class='effectBtn upBtn' disabled>v</button>";

        var modifyBtnHtml = "<button class='effectBtn modifyBtn' onclick='//modifyEffect(" + i + ")'>O</button>";
        var deleteBtnHtml = "<button class='effectBtn deleteBtn' onclick='deleteEffect(" + i + ")'>X</button>";

        switch (effect.type) {
            case "grayscale":
                effectsList.innerHTML += "<li>Grayscale ; " + effect.rShift + " ; " + effect.gShift + " ; " + effect.bShift + deleteBtnHtml + modifyBtnHtml + downBtnHtml + upBtnHtml + "</li>";
                break;

            case "random":
                effectsList.innerHTML += "<li>Random ; " + effect.opacity + deleteBtnHtml + modifyBtnHtml + downBtnHtml + upBtnHtml + "</li>";
                break;

            case "chromaticAberration":
                effectsList.innerHTML += "<li>Chromatic Aberration" + deleteBtnHtml + modifyBtnHtml + downBtnHtml + upBtnHtml + "</li>";
                break;
        }
    }
}

function deleteEffect(id)
{
    effectsPile.splice(id, 1);
    applyEffects();
    showEffects();
}

function swapEffects(firstId, secondId)
{
    var temp = effectsPile[firstId];
    effectsPile[firstId] = effectsPile[secondId];
    effectsPile[secondId] = temp;

    applyEffects();
    showEffects();
}

function clearPile()
{
    effectsPile = [];
    showEffects();
}