/*Nút tìm kiếm trên di động*/
$("#button-search").click(function () {
    console.log($("#search-box").is(":visible"));
    if (!$("#search-box").is(":visible")) {
        $("#search-box").slideToggle("medium");
        $("#dl-menu").css("border-bottom", "none");
        $("#dl-menu").css("transition", "all .3s ease-in-out");
    } else {
        $("#search-box").slideToggle("medium");
        $("#dl-menu").css("border-bottom", "solid 2px rgb(75, 193, 240)");
        $("#dl-menu").css("transition", "all .3s ease-in-out");
    }
});