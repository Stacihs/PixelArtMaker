  //When size is submitted by the user, call makeGrid()
  $("form").submit(function(event) {
    $("table").empty();
    makeGrid();
    event.preventDefault();
  });

  function makeGrid(row, column) {
    row = $("#inputHeight").val();
    column = $("#inputWidth").val();
    //create row
    var i = 0;
    while (i < row) {
      $("table").append("<tr></tr>");
      i++;
      //create column
          for (var j = 0; j < column; j++) {
             $("tr:last-of-type").append("<td></td>");
            }
      }
      //assign box color
    $("td").click(function() {
      var colorChoice = $("#colorPicker").val();
      $(this).css("background-color", colorChoice);
    });
  };
