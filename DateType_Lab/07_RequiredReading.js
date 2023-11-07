function demo(bookPages,pagePerHour,days){
    let totalHoursNeeded = bookPages / pagePerHour;
    console.log(totalHoursNeeded);
    let readingHours = totalHoursNeeded / days;
    console.log(readingHours);
}

demo(212, 20 , 2)