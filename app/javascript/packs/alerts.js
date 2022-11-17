$(".closealertbutton").click(function (e) {
    $(this).parent().parent().hide(200);
});

$("#user_options").click(function (e) {
    if ($("#user_dropdown").hasClass("invisible")) {
        $("#user_dropdown").removeClass("invisible");
    } else {
        $("#user_dropdown").addClass("invisible");
    }
});

$(".button-cancel").click(function (e) {
    $(".modal-cancel").removeClass("invisible");
});

$(".dont-cancel").click(function (e) {
    $(".modal-cancel").addClass("invisible");
});
