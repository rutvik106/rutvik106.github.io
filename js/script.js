$(document).ready(function () {


    $('.carousel').carousel();


    var number = Math.floor((Math.random() * 10) + 1);

    var quotes;

    switch (number) {
        case 1:
            quotes = "\"Great things in Business are never done by one person. They're done by a Team of people.\"";
            break;

        case 2:
            quotes = "";
            break;

        case 3:
            quotes = "";
            break;

        case 4:
            quotes = "";
            break;

        case 5:
            quotes = "";
            break;

        case 6:
            quotes = "";
            break;

        case 7:
            quotes = "";
            break;

        case 8:
            quotes = "";
            break;

        case 9:
            quotes = "";
            break;

        case 10:
            quotes = "";
            break;

    }

    $("#quotes").html(quotes);

});