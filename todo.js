function TodoController($scope) {
  $scope.todos = [];
    // {text:'Learn HTML5', done:true},
    // {text:'Learn jQuery', done:false},
    // {text:'Learn AngularJs', done:false}];
  $scope.todoText = '';


  //make JSON object to hold sound locations.
  $scope.sounds = {
    "no":[
        './Sounds/No_Task1_sfx.ogg',
        './Sounds/No_Task2_sfx.ogg',
        './Sounds/No_Task3_sfx.ogg'
    ], 
    "yes":[
        './Sounds/Yes_Task1_sfx.ogg',
        './Sounds/Yes_Task2_sfx.ogg',
        './Sounds/Yes_Task3_sfx.ogg'
    ]
  }

  if(localStorage.todos)
  {
    $scope.todos = JSON.parse(localStorage.todos)
  }
 
  $scope.addTodo = function() {
  	if ($scope.todoText.trim() != '') {
    	$scope.todos.push(
    		{text:$scope.todoText, done:false});
    	$scope.todoText = '';
   }

    localStorage.todos = JSON.stringify($scope.todos);
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    }); 
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });

    localStorage.todos = JSON.stringify($scope.todos);

  };


  $scope.playSound = function(done) {

    if(done)
    {
        // select random audio
        var urls = $scope.sounds['yes']

        var url = urls[Math.floor(Math.random() * urls.length)]; 

        var audio = new Audio(url);
        audio.play();

    }

    else{
        // select random audio
        var urls = $scope.sounds['no']

        var url = urls[Math.floor(Math.random() * urls.length)]; 

        var audio = new Audio(url);
        audio.play();
    }

  };

}
