let year = 2022;
let counter = 20;

let leapYearCalc = (year, counter) => {
    while (counter >= 0) {
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            console.log(`Index : ${counter} \n Leap year ${year}  `);
            year++;
            counter--;
        } else {
            year++;
        }
    }
}

leapYearCalc(year, counter);