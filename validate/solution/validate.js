function validateForm() {

    var x = document.forms["newForm"]["email"].value;
    if (x == null || x == "") {
        alert("Email must be filled out");
        return false;
    }

    var x = document.forms["newForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }

    var x = document.forms["newForm"]["age"].value;
    if (x == null || x == "") {
        alert("Age must be filled out");
        return false;
    }
    return true;

}
function emailUpdates() {
    var x = document.forms["updatesForm"]["email2"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    return true;
}
