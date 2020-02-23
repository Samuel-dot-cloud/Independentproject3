$(document).ready(function() {
    $("#part1").click(function() {
        $("#desi").toggle();
        $("#desiploy").toggle();
    });
    $("#part2").click(function() {
        $("#develop").toggle();
        $("#developloy").toggle();
    });
    $("#part3").click(function() {
        $("#productmn").toggle();
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