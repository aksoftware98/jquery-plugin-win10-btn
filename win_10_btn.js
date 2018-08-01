$.fn.win10btn = function () {
    var width = $(this).width();
    var height = $(this).height();
    var left = $(this).offset().left;
    var top = $(this).offset().top;
    var appliedClass = "";
    var minimunPercent = 30;
    var maximumPercent = 70;

    var id = $(this).attr("id");

    $(this).mousemove(function (event) {
        var x = event.pageX;
        var y = event.pageY;

        var percentX = (x - left) * 100 / width;
        var percentY = (y - top) * 100 / height;
        $("span:first").text(y);
        $(this).mousedown(function () {

            // Check the percentage 
            if (percentX < minimunPercent && percentY < minimunPercent) {
                // Top left 
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-top-left-click");
                appliedClass = "btn-top-left-click";
            }
            else if (percentX > maximumPercent && percentY < minimunPercent) {
                // Top right 
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-top-right-click");
                appliedClass = "btn-top-right-click";
            }
            else if (percentX < minimunPercent && percentY > maximumPercent) {
                // Left Bottom
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-bottom-left-click");
                appliedClass = "btn-bottom-left-click";
            }
            else if (percentX > maximumPercent && percentY > maximumPercent) {
                // bottom right 
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-bottom-right-click");
                appliedClass = "btn-bottom-right-click";
            }
            else if (percentX > minimunPercent && percentX < maximumPercent && percentY < minimunPercent) {
                // Middle Top 
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-middle-top-click");
                appliedClass = "btn-middle-top-click";
            }
            else if (percentX > minimunPercent && percentX < maximumPercent && percentY > maximumPercent) {
                // Middle Bottom
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-middle-bottom-click");
                appliedClass = "btn-middle-bottom-click";
            }
            else if (percentY > minimunPercent && percentY < maximumPercent && percentX < minimunPercent) {
                // Middle Left 
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-middle-left-click");
                appliedClass = "btn-middle-left-click"; 
            }
            else if (percentY > minimunPercent && percentY < maximumPercent && percentX > maximumPercent) {
                // Middle Right
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-middle-right-click");
                appliedClass = "btn-middle-right-click";
            }
            else {
                // Center
                $("#" + id + " > .btn-body").removeClass(appliedClass);
                $("#" + id + " > .btn-body").addClass("btn-center-click");
                appliedClass = "btn-center-click";
            }
        });

        $(this).mouseup(function () {
            $("#" + id + " > .btn-body").removeClass(appliedClass);
        });

        $(this).mouseout(function () {
            $("#" + id + " > .btn-body").removeClass(appliedClass);
        });
    });

    return this; 
}
