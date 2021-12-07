(function(){
    var expiryMsg;
    var today;

    function offerExpires(today){
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Add 7 days time ( expiry in 7 day from today)
        weekFromToday = new Date(today.getTime() + 7*24*60*60*1000)
        console.log(weekFromToday)
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        day = dayNames[weekFromToday.getDay()]
        date = weekFromToday.getDate()
        month = monthNames[weekFromToday.getMonth()]
        year = weekFromToday.getFullYear()

        expiryMsg = day + " " + date + " " + month + " " + year

        return expiryMsg
    }

    today = new Date()
    console.log(offerExpires(today))
}())

