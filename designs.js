$(document).ready(function() {
  //When size is submitted by the user, call makeGrid()
  $("form").submit(function(event) {
    makeGrid();
    event.preventDefault();
  });

  function makeGrid(row, column) {
    row = $("#inputHeight").val();
    column = $("#inputWidth").val();
    //create row
    for (var i = 0; i < row; i++) {
      $("table").append("<tr></tr>");
      //create column
      for (var j = 0; j < column; j++) {
        $("tr:last-of-type").append("<td></td>");
        $("td").addClass("box");
        //assign box color
        $("td").click(function() {
          var colorChoice = $("#colorPicker").val();
          $(this).css("background-color", colorChoice);
        });
      }
    }
  };
});
