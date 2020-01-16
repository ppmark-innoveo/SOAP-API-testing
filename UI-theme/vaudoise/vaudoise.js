//Add code here
$(document).on('zoneComponentsLoaded.skye ', function (e) {
    setTimeout(function () {
        $(document).trigger('bootstrapInit.skye');
    }, 1000);
});

$(document).on('click', '.sk-autosearch-tab', function (e) {
    setTimeout(function () {
        $(document).trigger('bootstrapInit.skye');
    }, 1000);
});
