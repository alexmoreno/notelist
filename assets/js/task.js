// aquele ES6zinho maroto
'use strict';
angular.module('taskApp', [
  'gulp-angular-modules',

  ])

// config tudo junto aqui mesmo pois é só isso
.config((localStorageServiceProvider) => {
  localStorageServiceProvider.prefix = 'task';
})

// só vamos usar um controller, então pode ficar tudo aqui também
.controller('TasksController', ($scope, localStorageService) => {
  let lss = localStorageService;
  $scope.tasks = [];
  $scope.tasks.unshift({title: 'Título', text: 'Escreva algo aqui', focused: false})

  if(lss.get('tasks')){
    $scope.tasks = lss.get('tasks')

    for (let a in $scope.tasks) {
      if($scope.tasks[a].focused == true) $scope.taskOnNote = $scope.tasks[a]
    }
  }

  $scope.addTask = () => {
    $scope.tasks.unshift({text: '',  title: 'Título', focused: false});
    $scope.focus(0)
  };

  $scope.focus = (index) => {
    $scope.taskOnNote = $scope.tasks[index]

    for (let a in $scope.tasks) {
      $scope.tasks[a].focused = false
    }
    $scope.tasks[index].focused = true  
    
  }

  $scope.delete = (index) => { 
    if (confirm("Seriously? There's no way to restore your data")) {
      $scope.tasks.splice(index, 1)  }
      
    }

  $scope.exportTasks = () => {
    let base_64 = JSON.stringify($scope.tasks)
    prompt("Copy and save this, it's your backup string. Import it on another domain when you need.", base_64/*.replace(/\"/g, "")*/)
  }


  $scope.importTasks = () => {
    let backupString = prompt("Input here your backup string")  

    if (backupString) {
      $scope.tasks = JSON.parse(backupString);

    }
    
  }

  let firstTimeAccessed = () => {
    for (let a in $scope.tasks) {
      if($scope.tasks[a].focused) return true
    }
    return false    
  }
  if (!firstTimeAccessed()) {
    $scope.focus(0)
  }

  // olha tudo e ressalva as tasks
  $scope.$watch('tasks', () => { lss.set('tasks', $scope.tasks) }, true);

});