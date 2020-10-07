// These functions are on the frontend too to facilitate text/chart displays

function getXVALArray(length) {
    let xval = new Array(length);
    let currentyear = new Date().getFullYear();

    for (let i=0;i < length; i++) {
        currentyear = currentyear + 1;
        xval[i] = new Date(currentyear, 1, 1, 0, 0, 0, 0).valueOf();
    }

    return xval;
}

function getXVALYearsArray(length) {
    let xval = new Array(length);
    const currentyear = new Date().getFullYear();

    for (let i=0;i < length; i++) {
        xval[i] = currentyear + i;
    }

    return xval;
}

const toMatrix = (arr, width) => arr.reduce((rows, key, index) =>
    (index % width === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);

const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

// Custom Color for % Alive Indication
function perc2color(perc, min, max, opacity) {
    if (perc <= min) { return "#FF0000" + opacity }
    if (perc > max) { perc = 100; }

    let r = 0;
    let g = 0;
    let b = 0;
    let base = max - min;

    if (base === 0) { perc = 100; }
    else {
        perc = (perc - min) / base * 100;
    }

    if (perc < 50) {
        r = 255;
        g = Math.round(5.1 * perc);
    }
    else {
        g = 255;
        r = Math.round(510 - 5.10 * perc);
    }

    const h = r * 0x10000 + g * 0x100 + b * 0x1;

    return '#' + ('000000' + h.toString(16)).slice(-6) + opacity;
}

function transposefnc(a) {
    return a[0].map((_, c) => a.map(r => r[c]));
}


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

function sumArrays(...arrays) {
    let arraysumout = new Array(arrays[0].length).fill(0);

    for (let i = 0; i < arrays[0].length; i++) {
        for (let j = 1; j <= arrays.length; j++) {
            arraysumout[i] = arraysumout[i] + arrays[j - 1][i];
        }
    }

    return(arraysumout);
}

function divide2Arrays(arraynum, arrayden) {
    let arraydivout = new Array(Math.min(arraynum.length,arrayden.length)).fill(0);

    for (let i = 0; i < arraynum.length; i++) {
        arraydivout[i] = arraynum[i] / arrayden[i];
    }

    return(arraydivout);
}
