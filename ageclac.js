const curdate = new Date;

const dayinput = document.querySelector('.day')
const monthinput = document.querySelector('.month')
const yearinput = document.querySelector('.year')

const newday = document.querySelector('.age-day')
const newmonth = document.querySelector('.age-mon')
const newyear = document.querySelector('.age-year')

const monthmsg = document.querySelector('.monthmsg')
const daymsg = document.querySelector('.daymsg');
const yearmsg=document.querySelector('.yearmsg')

const clacbtn = document.querySelector('#btn');

let currday = curdate.getDate();
let currmonth = curdate.getMonth() + 1;
let curryear = curdate.getFullYear();

let monthvalue;
let yearvalue;
let dayvalue;

clacbtn.onclick = function () {
    day();
    month();
    year();
    currmonth = curdate.getMonth() + 1;
    curryear = curdate.getFullYear();
}

function day() {
    dayvalue = Number(dayinput.value);
    if(dayvalue>31 || dayvalue==""){
        dayinput.classList.add('invalid')
        daymsg.classList.add('show')
        return;
    }
    dayinput.classList.remove('invalid')
    daymsg.classList.remove('show')
    if (currday < dayvalue) {
        if (currmonth == 4 || currmonth == 6 || currmonth == 9 || currmonth == 11 || currmonth == 2) {
            calcday = currday + 31 - dayvalue;
            newday.innerHTML = calcday;
            currmonth=currmonth-1;
            return;
        }
        if (currmonth == 3) {
            calcday = currday + 28 - dayvalue;
            newday.innerHTML = calcday;
            currmonth=currmonth-1;
            return;
        }
        calcday = currday + 30 - dayvalue;
        newday.innerHTML = calcday;
        currmonth=currmonth-1;

    } else {
        calcday = currday - dayvalue;
        newday.innerHTML = calcday;
    }
}

function month() {
    monthvalue = Number(monthinput.value);

    if (monthvalue > 12 || monthvalue == "") {
        monthinput.classList.add('invalid');
        monthmsg.classList.add('show')
        return;
    }

    monthinput.classList.remove('invalid');
    monthmsg.classList.remove('show')

    if (currmonth < monthvalue) {
        calcmonth = currmonth + 12 - monthvalue;
        newmonth.innerHTML = calcmonth;
        curryear=curryear-1;
    } else {
        calcmonth = currmonth - monthvalue;
        newmonth.innerHTML = calcmonth;
    }

}

function year() {
    yearvalue = Number(yearinput.value);
       if(yearvalue>curryear || yearvalue==""){
        yearmsg.classList.add('show')
        yearinput.classList.add('invalid')
        return;
    }
    yearmsg.classList.remove('show')
    yearinput.classList.remove('invalid')
    calcyear = curryear - yearvalue;
    newyear.innerHTML = calcyear
}

