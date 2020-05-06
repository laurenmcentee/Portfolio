  $(document).ready(function() {
  $("#start_timer").click(

  function () {
  var totalTime = $("#time").val();
  var interval = $("#interval").val();
  var isValid = true;

  // validate the time

      if (totalTime == "")
          {
          $("#time_error").text("This field is required.");
          isValid = false;
          }
          else if (isNaN(totalTime))
          {
          $("#time_error").text("Time must be a number.");
          isValid = false;
          }
          else
          {
            $("#time_error").text("");
          }

          if (interval == "") {
          $("#interval_error").text("This field is required.");
          isValid = false;

          } else if (isNaN(interval)) {
          $("#interval_error").text("Interval must be a number.");
          isValid = false;

          } else {
          $("#interval_error").text("");
          }

          if (isValid) {
          totalTime = totalTime * 1000;
          interval = interval * 1000;
            var elapsedTime = 0;
            var displayMinutes = 0;
            var displaySeconds = 0;

      var timer = setInterval(
      function () {
      elapsedTime += interval;
      displaySeconds = elapsedTime /totalTime *100;

    $( "#progressbar" ).progressbar({
    value: displaySeconds
    });

    if (elapsedTime == totalTime) {
    clearInterval(timer);
    $("#complete span").text("Time is up!");
    }

    },
    interval );

    }
  }
);
  $("#totalTime").focus();
});
