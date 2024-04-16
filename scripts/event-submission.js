function submit_event() {
    var title = document.forms["event"]["event_title"].value;
    var date = document.forms["event"]["event_date"].value;
    if (title == "") {
        alert("An event must have a title!");
    }
    else {
        if (date.length == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
        }
    }
}