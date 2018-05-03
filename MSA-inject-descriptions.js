var inject = function() {
  $(".assignment-detail-link,.assign-title-link").not(".calendar-title-text>.assign-title-link").not("[data-description-loaded='complete']").each(function () {
    var ref = $(this);
    var id = ref.attr("href").split("/")[1];
    var options = {
      dataType: "json",
      emulateHTTP: false,
      emulateJSON: false,
      error: function (i, h, f) { alert("ERROR") },
      parse: true,
      success: function (i) {
        ref.after($("<p/>").text($("<div/>").html(i.LongDescription.replace(/<br \/>/g,"   ")).text()).css("font-size","x-small"))
        ref.attr("data-description-loaded", "complete")
      },
      type: "GET",
      url: "/api/assignment2/read/" + id + "/?format=json"
    };
    $.ajax(undefined, options);
  });
}
$( document ).ajaxComplete(function( event, xhr, settings ) {
  if (settings.url.startsWith("/api/DataDirect/AssignmentCenterAssignments/")){
    setTimeout(inject, 500);
  }
});
