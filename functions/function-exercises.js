
function makeLine(lineSize) {
    let diamondOutput = "";
    for (i=0; i<lineSize; i++) {
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
    for (ri = 0; ri<(rectHeight-1); ri++) {
        rectangleOutPut = rectangleOutPut + makeLine(rectWidth) + '\n';
    }
    if (rectHeight>0) {
        rectangleOutPut = rectangleOutPut + makeLine(rectWidth);
    }
return rectangleOutPut;
}

function makeDownwardStairs(stairHeight) {
    let stairOutput = "";
    for (ai=0; ai<stairHeight; ai++){
        stairOutput = stairOutput + makeLine(ai+1);
        if ((ai+1)<stairHeight) {
            stairOutput = stairOutput + '\n';
        }
    }
    return stairOutput;
}

function makeSpace(spaceLength, spaceIcon = ' ') {
    let spaceOutput = ""
    for (bi=0;bi<spaceLength;bi++){
        spaceOutput = spaceOutput + spaceIcon;
    }
    return spaceOutput;
}

function makeSpaceLine(spaceNum,hashNum, hashIcon = '#', spaceIcon = ' ') {
    let spaceLineOutput = "";
    let spacesTemp = makeSpace(spaceNum, spaceIcon);
    for (ci=0;ci<hashNum;ci++){
        spaceLineOutput = spaceLineOutput + hashIcon;
    }
    spaceLineOutput = spacesTemp + spaceLineOutput + spacesTemp;
    return spaceLineOutput;
}

function makeIsocelesTriangle(isoHeight, hashIcon = '#', spaceIcon = ' '){
    let isoOutput = "";
    for (di=0; di<isoHeight; di++) {
        isoOutput = isoOutput + makeSpaceLine((isoHeight-(di+1)),(2*di+1), hashIcon, spaceIcon);
        if (di<(isoHeight-1)){
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