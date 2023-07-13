"use strict";

window.addEventListener("DOMContentLoaded", function () {
    const date = new Date();

    const hour = document.querySelector(".hour");
    hour.textContent = setZero(date.getHours());

    const minute = document.querySelector(".minute");
    minute.textContent = setZero(date.getMinutes());

    let second = document.querySelector(".second");
    second.textContent = setZero(date.getSeconds());

    const week = document.querySelector(".week");
    week.textContent = setWeekDay(date.getDay());

    const month = document.querySelector(".month");
    month.textContent = setMonth(date.getMonth());

    const day = document.querySelector(".day");
    day.textContent = setZero(date.getDate());

    const year = document.querySelector(".year");
    year.textContent = date.getFullYear();

    setInterval(() => {
        const date = new Date();
        hour.textContent = setZero(date.getHours());
        minute.textContent = setZero(date.getMinutes());
        second.textContent = setZero(date.getSeconds());

        week.textContent = setWeekDay(date.getDay());
        month.textContent = setMonth(date.getMonth());
        day.textContent = setZero(date.getDate());
        year.textContent = date.getFullYear();
    }, 1000);

    function setZero(n) {
        return n < 10 ? `0${n}` : n;
    };

    function setWeekDay(wd) {
        switch (wd) {
            case 1 : return "Mon"
            case 2 : return "Tue"
            case 3 : return "Wed"
            case 4 : return "Thu"
            case 5 : return "Fri"
            case 6 : return "Sat"
            case 7 : return "Sun"
            default : return "some weekday"
        }
    }

    function setMonth(m) {
        switch (m) {
            case 0 : return "January"
            case 1 : return "February"
            case 2 : return "March"
            case 3 : return "April"
            case 4 : return "May"
            case 5 : return "June"
            case 6 : return "July"
            case 7 : return "August"
            case 8 : return "September"
            case 9 : return "October"
            case 10 : return "November"
            case 11 : return "December"
            default : return "some month"
        }
    }
});
