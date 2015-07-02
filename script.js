  $(function() {

  // `toDos` array is our model (holds our data)
  // contains test (or "seed") data
  var toDos = [
    {name: "laundry", desc: "clean clothes"},
    {name: "grocery shopping", desc: "buy food"},
    {name: "nap time", desc: "remember to sleep!"}
  ];

  // form to create new todo
  var $newToDo = $('#new-toDo');
  
  // element to hold our list of todos
  var $toDoList = $('#toDo-list');

  // todo template
  var toDoTemplate = _.template($('#toDo-template').html());

  // append our existing pets (from seed data) to `$toDoList`
  _.each(toDos, function (toDo, index) {
    var $toDo = $(toDoTemplate(toDo));
  //  $todo.attr('data-index', index);
    $toDoList.append($toDo);
  });

  // submit form to create new todo
  $newToDo.on('submit', function(event) {
    event.preventDefault();

    // create new todo object from form data
    var toDoName = $('#toDo-name').val();
    var toDoDesc = $('#toDo-desc').val();
    var toDoData = {name: toDoName, desc: toDoDesc};

    // store our new todo
    toDos.push(toDoData);

    // create new todo object from form data
    var toDoName = $('#toDo-name').val();
    var toDoDesc = $('#toDo-desc').val();
    var toDoData = {name: toDoName, desc: toDoDesc};

    // store our new toDo in the `toDos` array
    toDos.push(toDoData);
    console.log(toDos);
  //  var index = toDos.indexOf(toDoData);

  //   // append our new todo to the page
  //   $toDoList.append('<li class="todo">' + toDoData.name + ' - ' + toDoData.desc + '</li>');

  // append new todo to `$toDoList`
    var $toDo = $(toDoTemplate(toDoData));
  //  $to.attr('data-index', index);
    $toDoList.append($toDo);

    // reset the form
    $newToDo[0].reset();
    $('#toDo-name').focus();
   });

  // remove pets from model and view
 // $toDoList.on("click", ".delete", function () {
  //  var $toDo = $(this).closest(".toDo");

  //  var index = $todo.attr('data-index');

  // remove toDo from the `toDos` array (model)
  //  toDos.splice(index, 1);
  //  console.log(toDos);

  // remove pet from the DOM (view)
  //  $toDo.remove();
 // });
  // add class to todo on click to mark it as done
  $toDoList.on('click', '.toDo', function() {
    console.log("clicked");
    $(this).addClass('done');
  });

     // reset indexes in DOM to match `pets` array
    // $.each loops through DOM elements
  //   $('.pet').each(function(index) {
  //     $(this).attr('data-index', index);
  //   });
  // });

});