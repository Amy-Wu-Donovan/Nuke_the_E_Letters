$(document).ready();

function dude() {
    var input = document.forms.userform.userinput.value;
    input = input.replace(/e/gi, "");
    $(".nukedPlace").html(input);
}