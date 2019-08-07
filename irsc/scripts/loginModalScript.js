$("#hotel").click(function (event) {
    event.preventDefault();
    console.log("before hotel");
    $("#hotel").css("border-bottom", "4px solid #353738");
    $("#customer").css("border", "none");
    console.log("after hotel");
});

$("#customer").click(function (event) {
    event.preventDefault();
    console.log("before customer");
    $("#customer").css("border-bottom", "4px solid #353738");
    $("#hotel").css("border", "none");
    console.log("after customer");
});
