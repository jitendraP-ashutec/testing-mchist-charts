// These functions are on the frontend too to facilitate text/chart displays

// Getting age (in years)
export function numAgeFNC(birthday, birthmonth, birthyear) {

    let ageresult = (new Date().getTime() - new Date(birthyear,
        birthmonth, birthday, 0, 0, 0, 0).getTime()) / 31536000000;

    if (ageresult < 0) { ageresult = 0; }

    return ageresult;

}

// Getting the # of Years to run the simulation
export function numYearsFNC(client_age, coclient_age, maxagetoplan, coclient_selected) {
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
export function getPercentFundsFNC(in_portfoliotype, in_usecustomperc, in_usecanadian,
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
export function getMapFNC(lenarray, numyears_adjust_start, numyears_adjust_end, start_perc, end_perc) {
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

export const toMatrix = (arr, width) => arr.reduce((rows, key, index) =>
    (index % width === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);

export const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

// Custom Color for % Alive Indication
export function perc2color(perc, min, max, opacity) {
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

export function transposefnc(a) {
    return a[0].map((_, c) => a.map(r => r[c]));
}


export function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

export function ascending(a, b) {
    return a - b;
}

export function sumArrays(...arrays) {
    let arraysumout = new Array(arrays[0].length).fill(0);

    for (let i = 0; i < arrays[0].length; i++) {
        for (let j = 1; j <= arrays.length; j++) {
            arraysumout[i] = arraysumout[i] + arrays[j - 1][i];
        }
    }

    return(arraysumout);
}

function standardDeviation(values){
    let avg = arrAvg(values);

    let squareDiffs = values.map(function(value){
      return Math.pow(value - avg, 2);
    });

    let avgSquareDiff = arrAvg(squareDiffs);

    return Math.sqrt(avgSquareDiff);
}
