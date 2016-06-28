<!DOCTYPE html>
<html ng-app="taskApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Dosis:400' rel='stylesheet' type='text/css'>
  	
	<title>Notepad da alegria</title>
	<link rel="stylesheet" href="./assets/css/style.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.js"></script>
	
	<script src="node_modules/angular-local-storage/dist/angular-local-storage.js"></script>
	
	<script src="app/src/init/gulp-angular-modules.js"></script>
	
	
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
	<script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
	<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
	<script src="https://use.fontawesome.com/27682896b8.js"></script>
	<script src="assets/js/task.js"></script>



	 
	 <!-- inject:js -->
	<!-- endinject -->
</head>
<body >

	<div class="wrapper" ng-controller = 'TasksController '>
		<div class="list-tasks">
		<div class="list-tasks-menu">
			<div class="list-task-title">Tasks</div>
			<a href="" ng-click='addTask()'><i class="fa fa-plus" aria-hidden="true"></i>Task</a>  
			<a href="" ng-click='exportTasks()'><i class="fa fa-upload" aria-hidden="true"></i>	Export  </a>
			<a href="" ng-click='importTasks()'><i class="fa fa-download" aria-hidden="true"></i> Import </a>

			<span class='task-counter'> {{tasks.length}} tasks</span>
		</div>
			<ul>
				<li class='task-listed' ng-repeat="task in tasks track by $index" ng-class="{'focused-task': task.focused }"  ng-click='focus($index)'>

					<a href="" class='task-title'>{{task.title}}</a>
					<a href="" ng-click='delete($index)' class='task-delete task-action'><i class="fa fa-trash" aria-hidden="true"></i></a>
					<div class="task-excerpt">{{task.text}}</div>
				</li>
			</ul>
		</div>
		<div class="notepad-container">
			<div class="notepad-header">
				<!-- aqui eu vou colocar aqueles bang de markdown lá que vai ficar irado -->
			</div>
			<input type="text" ng-model='taskOnNote.title' id='notepad-title'>
			
			<textarea id="notepad" ng-model='taskOnNote.text' ></textarea>			

			
		</div>
	</div>

</body>
</html>