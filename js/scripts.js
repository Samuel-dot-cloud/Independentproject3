$(document).ready(function() {
    console.log('------------------------------------');
    console.log('------------------------------------');
    $("#desi").click(function() {
        console.log('works');

        $("#desiploy").toggle()
    });
    $("#develop").click(function() {

        $("#developloy").toggle();
    });
    $("#productmn").click(function() {

        $("#productmnploy").toggle();
    });

    $(".third").click(function() {
        $(this).fadeTo("fast", 0.4)
    })
    $("div.column").mouseenter(function() {
        $(this).fadeTo("slow", 0.4)
    })
    $("div.column").mouseleave(function() {
        $(this).fadeTo("slow", 1)
    })
    $("#mc_embed_signup").submit(function(event) {
        var fname = $("input#mce-FNAME").val();
        var lname = $("input#mce-LNAME").val();
        alert("Hi, " + fname + lname + ". We got your details. Thank you for continuing with us by subscribing.")
        event.preventDefault()
    })
})