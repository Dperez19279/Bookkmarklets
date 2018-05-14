function inject() {
  $("#showGrade").click();
}

$( document ).ajaxComplete(function( event, xhr, settings ) {
  if (settings.url.startsWith("/api/gradebook/GradeBookMyDayMarkingPeriods")){
    setTimeout(inject, 500);
  }
});
