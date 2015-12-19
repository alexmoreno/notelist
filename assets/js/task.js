// aquele ES6zinho maroto
'use strict';
angular.module('taskApp', ['gulp-angular-modules'])

// config tudo junto aqui mesmo pois é só isso
.config((localStorageServiceProvider) => {
    localStorageServiceProvider.prefix = 'task';
})

// só vamos usar um controller, então pode ficar tudo aqui também
.controller('TasksController', ($scope, localStorageService) => {
    let lss = localStorageService;
    $scope.tasks = [];
    $scope.tasks.push({title: 'Titulo', text: 'Escreva algo aqui', focused: false})
    
    if(lss.get('tasks')){
        $scope.tasks = lss.get('tasks')
        for (let a in $scope.tasks) {
            if($scope.tasks[a].focused == true) $scope.taskOnNote = $scope.tasks[a]
        }
    }

    $scope.addTask = () => {
        $scope.tasks.push({text: '',  title: 'Título'});
        $scope.focus($scope.tasks.length-1)
    };
    
    $scope.focus = (index) => {
        $scope.taskOnNote = $scope.tasks[index]
        for (let a in $scope.tasks) {
            $scope.tasks[a].focused = false
        }
        $scope.tasks[index].focused = true
    }

    $scope.delete = (index) => { $scope.tasks.splice(index, 1)  }

    $scope.focus(0)

    $scope.$watch('tasks', () => { lss.set('tasks', $scope.tasks) }, true);

});