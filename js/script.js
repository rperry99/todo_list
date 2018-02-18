//Script.js
$(function() {
/***********************************
To Do List
***********************************/
  $('#todoList ul').sortable({
    //makes listTitle and addItem not sortable
    items: "li:not('.listTitle, .addItem')",
    //Lets the user move each task to any day
    connectWith: "ul",
    //You can drop on an empty list
    dropOnEmpty: true,
    placeholder: 'emptySpace'
  });

  $('input').keydown(function(e){
    if(e.keyCode == 13) {
      var item = $(this).val();
      $(this).parent().parent().append('<li>' + item + '</li>');
      $(this).val('');
    }
  });

  $('#trash').droppable({
    drop: function(event, ui) {
      ui.draggable.remove();
    }
  })

});
