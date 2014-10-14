"use strict";

function fileSelectEvent() {
    var input    = $(this);
    var numFiles = input.get(0).files ? input.get(0).files.length : 1;
    var label    = input.val().replace(/\\/g, "/").replace(/.*\//, "");

    input.trigger("fileselect", [numFiles, label]);
}

$(document).on("change", ".btn-file :file", fileSelectEvent);

$(document).ready(function() {

    function handleFileSelect(event, numFiles, label) {
        var id = event.currentTarget.id;
        $("#" + id + "-label").text(label);
    }

    $(".btn-file :file").on("fileselect", handleFileSelect);
});
