


function getCurrentDate(){

    const lang = navigator.language;

    let date = new Date();

    let dayNumber = date.getDate();
    let month = date.getMonth() + 1;
    let dayName = date.toLocaleDateString(lang, {weekday: 'long'});
    let monthName = date.toLocaleDateString(lang, {month: 'long'});
    let year = date.getFullYear();

    document.getElementById("monthName").innerHTML = monthName;
    document.getElementById("weekName").innerHTML = dayName;
    document.getElementById("dayNumber").innerHTML = dayNumber;
    document.getElementById("year").innerHTML = year;

    // var daysInMonth = new Date(year, month, 0).getDate();

}

getCurrentDate();
