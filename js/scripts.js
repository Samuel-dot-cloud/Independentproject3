$().ready(function() {
    $("#desi").click(function() {

        $("#desiploy").toggle();
    });
    $("#develop").click(function() {

        $("#developloy").toggle();
    });
    $("#productmn").click(function() {

        $("#productmnploy").toggle();
    });
});
$().ready(function() {
    $(".fifth").mouseenter(function() {
        $(this).fadeTo("fast", 2)
    })
    $(".fifth").mouseleave(function() {
        $(this).fadeTo("fast", 1)
    })
})
$().ready(function() {
    $("#contact form").submit(function(event) {
        var fname = $("input#mce-FNAME").val();
        var lname = $("input#mce-LNAME").val();
        alert("Hi, " + fname + lname + ". We got your details. Thank you for continuing with us by subscribing.")
        event.preventDefault()
    })
})