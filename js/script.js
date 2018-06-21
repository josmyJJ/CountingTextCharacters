/**
 * Created by Josemy_Macbook_Pro on 6/21/18.
 */
$(document).ready(function () {
    var text_max = 141;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#posttext').keyup(function () {
        var text_length = $('#posttext').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' characters remaining');
    });
});

function validate(form) {
    valid = true;
    if ($('#posttext').val() == "") {
        alert("You may not submit an empty post.");
        valid = false;
    }
    return valid;
}