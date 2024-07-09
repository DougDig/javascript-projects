
function makeLine(lineSize) {
    let diamondOutput = "";
    for (let i=0; i<lineSize; i++) {
        diamondOutput = diamondOutput + "#";
    }
    return diamondOutput;
}

function makeSquare(SquareSize) {
    let squareOutPut = makeRectangle(SquareSize,SquareSize);

    return squareOutPut;
}

function makeRectangle(rectWidth, rectHeight) {
    let rectangleOutPut = "";
    for (let i = 0; i<(rectHeight-1); i++) {
        rectangleOutPut = rectangleOutPut + makeLine(rectWidth) + '\n';
    }
    if (rectHeight>0) {
        rectangleOutPut = rectangleOutPut + makeLine(rectWidth);
    }
return rectangleOutPut;
}

function makeDownwardStairs(stairHeight) {
    let stairOutput = "";
    for (let i=0; i<stairHeight; i++){
        stairOutput = stairOutput + makeLine(i+1);
        if ((i+1)<stairHeight) {
            stairOutput = stairOutput + '\n';
        }
    }
    return stairOutput;
}

function makeSpace(spaceLength, spaceIcon = ' ') {
    let spaceOutput = ""
    for (let i=0;i<spaceLength;i++){
        spaceOutput = spaceOutput + spaceIcon;
    }
    return spaceOutput;
}

function makeSpaceLine(spaceNum,hashNum, hashIcon = '#', spaceIcon = ' ') {
    let spaceLineOutput = "";
    let spacesTemp = makeSpace(spaceNum, spaceIcon);
    for (let i=0;i<hashNum;i++){
        spaceLineOutput = spaceLineOutput + hashIcon;
    }
    spaceLineOutput = spacesTemp + spaceLineOutput + spacesTemp;
    return spaceLineOutput;
}

function makeIsocelesTriangle(isoHeight, hashIcon = '#', spaceIcon = ' '){
    let isoOutput = "";
    for (let i=0; i<isoHeight; i++) {
        isoOutput = isoOutput + makeSpaceLine((isoHeight-(i+1)),(2*i+1), hashIcon, spaceIcon);
        if (i<(isoHeight-1)){
            isoOutput = isoOutput + "\n";
        }
    }
    return isoOutput;
}

function makeDiamond(diaHeight, hashIcon = '#', spaceIcon = ' ') {
    let diaTemp = makeIsocelesTriangle(diaHeight, hashIcon, spaceIcon);
    let diaOutput = diaTemp;
    diaOutput = diaOutput + '\n' + reverse(diaTemp);
    return diaOutput;
}

function reverse(inputString) {
    return inputString.split('\n').reverse().join('\n');
}

console.log(makeDiamond(48,'v',','))