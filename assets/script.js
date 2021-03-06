$(document).ready(function () {
    let currentHour = moment().hour();

    //Moment = displays the current day, date, and time
    let updateClock = function () {
        $("#presentDate").text(moment().format('dddd, MMMM Do'));
        $("#presentTime").text(moment().format("h:mm a"));
    };
    updateClock();

    //Makes sure the clock is up-to-date
    setInterval(updateClock, 1000);

    //Create the hours for the work-day
    const dayHours = [
        '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'
    ];

    //generate the table using the above array
    for (var i = 0; i < dayHours.length; i++) {

        //let current time be a variable
        let dataHour = [i + 8];
        //create a row
        let createRow = $("<tr>");
        //first column of the row information with dayHours and dataHour
        let timeColumn = $(`<td class="align-middle"><p class="time" id="$(dayHours[i]}" data-hour="${dataHour}">${dayHours[i]}</p></td>`);
        //second column with textbox and dataHour
        let taskColumn = $(`<td class="align-middle"><textarea class="form-control border-0 taskText" id="${dataHour}text" rows="3"></textarea></td>`);
        //third column with save button and dataHour
        let saveColumn = $(`<td class="align-middle"><i class="far fa-save fa-5x saveBtn btn-block" data-hour="${dataHour}"></i></td>`);

        //append table data to the table row
        createRow.append(timeColumn, taskColumn, saveColumn);
        //append the table row to the body of the html table
        $('tbody').append(createRow);
    };

    //local storage initiated
    localStor();
    function localStor() {
        for (var i = 8; i < 19; i++) {
            //gives text areas storage
            $('#' + i + 'text').val(localStorage.getItem(i));
        }
    };

    //Color-code for current and future time loop
    for (var i = 8; i < 19; i++) {

            if (currentHour > i) {
                //make background grey if past time
            $('.timeColor')
                .eq(i - 8)
                .css('background-color', '#d3d3d3');
            }

            //make the background red if it is the current hour
            if (currentHour === i) {
                $('.timeColor')
                    .eq(i - 8)
                    .css('background-color', '#ff6961');
            }
            // Make the background green if it is the current hour
            if (currentHour < i) {
                $('.timeColor')
                    .eq(i - 8)
                    .css('background-color', '#77dd77');
            }
        };

        //Event listener for the save button
        $('.saveBtn').click(function (e) {
            e.preventDefault();
            //picks row to save to local storage
            var identifyRow = $(this).data('hour');
            let taskColumn = {
                hour: $(this).data('hour'),
                message: $('#' + identifyRow + 'text').val(),
            };
            localStorage.setItem(taskColumn.hour, taskColumn.message);
            console.log('saved')
        });

    });