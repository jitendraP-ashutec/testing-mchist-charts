// These functions are on the frontend too to facilitate text/chart displays


let colorjson=[{value:0,color:"#FF0000"},{value:1,color:"#FF0000"},{value:2,color:"#FF0000"},{value:3,color:"#FF0000"},{value:4,color:"#FF0000"},{value:5,color:"#FF0000"},{value:6,color:"#FF0000"},{value:7,color:"#FF0000"},{value:8,color:"#FF0000"},{value:9,color:"#FF0000"},{value:10,color:"#FF0000"},{value:11,color:"#FF0000"},{value:12,color:"#FF0000"},{value:13,color:"#FF0000"},{value:14,color:"#FF0000"},{value:15,color:"#FF0000"},{value:16,color:"#FF0000"},{value:17,color:"#FF0000"},{value:18,color:"#FF0000"},{value:19,color:"#FF0000"},{value:20,color:"#FF0000"},{value:21,color:"#FF0000"},{value:22,color:"#FF0000"},{value:23,color:"#FF0000"},{value:24,color:"#FF0000"},{value:25,color:"#FF0000"},{value:26,color:"#FF0000"},{value:27,color:"#FF0000"},{value:28,color:"#FF0000"},{value:29,color:"#FF0000"},{value:30,color:"#FF0000"},{value:31,color:"#FF0000"},{value:32,color:"#FF0000"},{value:33,color:"#FF0000"},{value:34,color:"#FF0000"},{value:35,color:"#FF0000"},{value:36,color:"#FF0000"},{value:37,color:"#FF0000"},{value:38,color:"#FF0000"},{value:39,color:"#FF0000"},{value:40,color:"#FF0000"},{value:41,color:"#FF0000"},{value:42,color:"#FF0000"},{value:43,color:"#FF0000"},{value:44,color:"#FF0000"},{value:45,color:"#FF0000"},{value:46,color:"#FF0000"},{value:47,color:"#FF0000"},{value:48,color:"#FF0000"},{value:49,color:"#FF0000"},{value:50,color:"#FF0000"},{value:51,color:"#FF0000"},{value:52,color:"#FF0000"},{value:53,color:"#FF0000"},{value:54,color:"#FF0000"},{value:55,color:"#FF0000"},{value:56,color:"#FF0000"},{value:57,color:"#FF0000"},{value:58,color:"#FF0000"},{value:59,color:"#FF0000"},{value:60,color:"#FF0000"},{value:61,color:"#FF0000"},{value:62,color:"#FF0000"},{value:63,color:"#FF0000"},{value:64,color:"#FF0000"},{value:65,color:"#FF0000"},{value:66,color:"#FF0000"},{value:67,color:"#FF0000"},{value:68,color:"#FF0000"},{value:69,color:"#FF0000"},{value:70,color:"#FF0000"},{value:71,color:"#ff1100"},{value:72,color:"#ff2200"},{value:73,color:"#ff3300"},{value:74,color:"#ff4400"},{value:75,color:"#ff5500"},{value:76,color:"#ff6600"},{value:77,color:"#ff7700"},{value:78,color:"#ff8800"},{value:79,color:"#ff9900"},{value:80,color:"#ffaa00"},{value:81,color:"#ffbb00"},{value:82,color:"#ffcc00"},{value:83,color:"#ffdd00"},{value:84,color:"#ffee00"},{value:85,color:"#ffff00"},{value:86,color:"#eeff00"},{value:87,color:"#ddff00"},{value:88,color:"#ccff00"},{value:89,color:"#bbff00"},{value:90,color:"#aaff00"},{value:91,color:"#99ff00"},{value:92,color:"#88ff00"},{value:93,color:"#77ff00"},{value:94,color:"#66ff00"},{value:95,color:"#55ff00"},{value:96,color:"#44ff00"},{value:97,color:"#33ff00"},{value:98,color:"#22ff00"},{value:99,color:"#11ff00"},{value:100,color:"#00ff00"},{value:101,color:"#00ff00"}];


// Getting age (in years)
function numAgeFNC(birthday, birthmonth, birthyear) {

    let ageresult = (new Date().getTime() - new Date(birthyear,
        birthmonth, birthday, 0, 0, 0, 0).getTime()) / 31536000000;

    if (ageresult < 0) { ageresult = 0; }

    return ageresult;

}

// Getting the # of Years to run the simulation
function numYearsFNC(client_age, coclient_age, maxagetoplan, coclient_selected) {
    let nyears = 30;

    if ((client_age > coclient_age && coclient_age > 0) || coclient_selected) {
        nyears = Math.ceil(maxagetoplan - coclient_age);
    }
    else {
        nyears = Math.ceil(maxagetoplan - client_age);
    }

    if (nyears < 5) { nyears = 5; } // min # of years
    if (nyears > 70) { nyears = 70; } // max # of years

    return (nyears);
}

// Getting % allocations for portfolio types
// (in_portfoliotype: 0=Very Aggressive, 1=Aggressive, 2=Balanced, 3=Conservative, 4=Very conservative)
function getPercentFundsFNC(in_portfoliotype, in_usecustomperc, in_usecanadian,
    in_stockperc, in_tbondperc, in_corpbondperc, in_cashperc) {

    // return array with Stock %, T Bond %, Corp Bond %, Cash % as the order (canadian only uses Stock %, T Bond %, Cash %)
    if (in_usecustomperc === true) {
        if (in_usecanadian === true) {
            return [in_stockperc, in_tbondperc + in_corpbondperc, in_cashperc];
        }
        else {
            return [in_stockperc, in_tbondperc, in_corpbondperc, in_cashperc];
        }
    }
    else {
        if (in_portfoliotype <= 0) {
            if (in_usecanadian === true) { // Very Aggressive
                return [95, 5, 0, 0];
            }
            else {
                return [95, 2, 3, 0];
            }
        }
        else if (in_portfoliotype === 1) { // Aggressive
            if (in_usecanadian === true) {
                return [80, 20, 0, 0];
            }
            else {
                return [80, 8, 12, 0];
            }
        }
        else if (in_portfoliotype === 2) { // Balanced
            if (in_usecanadian === true) {
                return [60, 35, 0, 5];
            }
            else {
                return [60, 15, 20, 5];
            }
        }
        else if (in_portfoliotype === 2) { // Conservative
            if (in_usecanadian === true) {
                return [35, 55, 0, 10];
            }
            else {
                return [35, 30, 25, 10];
            }
        }
        else { // Very Conservative
            if (in_usecanadian === true) {
                return [10, 75, 0, 15];
            }
            else {
                return [10, 40, 35, 15];
            }
        }
    }
}

// Gets a map of % given a start % & end % over a duration
function getMapFNC(lenarray, numyears_adjust_start, numyears_adjust_end, start_perc, end_perc) {
    // If the years in is 0 or less then the array is just the end percentage
    if (numyears_adjust_end <= 0) { return new Array(lenarray).fill(end_perc); }

    // If End Percent = Start Percent
    if (start_perc === end_perc) { return new Array(lenarray).fill(end_perc); }

    // If Years to Start is more than years to end (doesn't make sense - just to make sure no strange results)
    if (numyears_adjust_end < numyears_adjust_start) { return new Array(lenarray).fill(end_perc); }


    ////////////////////////////////////////////////////////////
    // Otherwise, create the map going up or down
    let mapresult = new Array(lenarray).fill(start_perc);
    let numberofyearsforadjustment = numyears_adjust_end - numyears_adjust_start;

    // Amount to add or subtract from start each year
    let adjustment_per_year = Math.abs(end_perc - start_perc) / numberofyearsforadjustment;

    // End % > Start %
    if (end_perc > start_perc) {
        for (let i = 1; i < lenarray; i++) {
            if (i < numyears_adjust_end && i >= numyears_adjust_start) {
                mapresult[i] = mapresult[i - 1] + adjustment_per_year; // New Val = Last Val - the amount to add per year
            }
            else if (i < numyears_adjust_start) {
                mapresult[i] = start_perc;
            }
            else {
                mapresult[i] = end_perc;
            }
        }
    }
    // End % < Start %
    else {
        for (let i = 1; i < lenarray; i++) {
            if (i < numyears_adjust_end && i >= numyears_adjust_start) {
                mapresult[i] = mapresult[i - 1] - adjustment_per_year; // New Val = Last Val - the amount to subtract per year
            }
            else if (i < numyears_adjust_start) {
                mapresult[i] = start_perc;
            }
            else {
                mapresult[i] = end_perc;
            }
        }
    }

    return mapresult;
}

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

function standardDeviation(values) {
    let avg = arrAvg(values);

    let squareDiffs = values.map(function(value){
      return Math.pow(value - avg, 2);
    });

    let avgSquareDiff = arrAvg(squareDiffs);

    return Math.sqrt(avgSquareDiff);
}
