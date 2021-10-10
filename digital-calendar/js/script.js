


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



    var dateNum = document.querySelectorAll(".number");

        for(let i = 0; i < dateNum; i++)
        {
            console.log(dateNum[i].value);
        }

    if(dateNum.value === dayNumber){

        dateNum.classList.add('is-today');
        console.log("no value");

    }

    document.get


    // var daysInMonth = new Date(year, month, 0).getDate();

}




getCurrentDate();
