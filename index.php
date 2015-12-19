<!DOCTYPE html>
<html ng-app="taskApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Notepad da alegria</title>
	<link rel="stylesheet" href="./assets/css/style.css">
	
	 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.js"></script>
	 <script src="node_modules/angular-local-storage/dist/angular-local-storage.js"></script>
	 <script src="app/src/init/gulp-angular-modules.js"></script>
	 <script src="assets/js/task.js"></script>
	 
	 <!-- inject:js -->
	<!-- endinject -->
</head>
<body>

	<div class="wrapper" ng-controller = 'TasksController '>
		<div class="list-tasks">
		<div class="list-tasks-menu">
			<a href="" ng-click='addTask()'>+ Task</a>
		</div>
			<ul>
				<li ng-repeat="task in tasks">
					<a href="" ng-click='focus($index)'>{{task.title}}</a>
					<a href="" ng-click='delete($index)' class='task-delete'>delete</a>
				</li>
			</ul>
		</div>
		<div class="notepad-container">
			<div class="notepad-header">
				<input type="text" ng-model='taskOnNote.title' id='task-title'>
			</div>
			<textarea id="notepad" ng-model='taskOnNote.text' ></textarea>
			
		</div>
	</div>

	<script>


	</script>
</body>
</html>