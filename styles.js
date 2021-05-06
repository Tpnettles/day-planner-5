$(document).ready(function(){
//code goes here

function saveTask(){
    alert('saved');
    //get stuff user put in textarea

    //save that to localstorage

    //show message of added text to user

    //hide message after so many seconds.
};

  


//user clicks save button 
$('.saveBtn').on('click', saveTask);
function updateRowColor(){
    //set variable to current hour
    //loop over each row of the class (time-block)
    // find row time by using data attribute (9 < 21)
    //add the past class to $(this).addClass('past');
};


//use interval to update row color
//color rows based on the time of the day
updateRowColor();

//load data from local storage and put it into the correct row
// #hour9 textarea to value of localstorage key number "hour-9"
// #hour10 textarea to value of localstorage key number "hour-10"
//display current date - moment (get document by id)
});