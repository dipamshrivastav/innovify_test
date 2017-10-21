/**
 * Created by Dipam on 10/20/2017.
 */
app.controller('UpdateUsersController', ['$scope', 'UserService', '$routeParams', "$location",
    function($scope, UserService, $routeParams, $location) {
        $scope.isEdit = true;
        var id = parseInt($routeParams.id);
        $scope.user = UserService.get(id);

        //updateUser is used when user click on Update
        $scope.updateUser = function(){
            var status = UserService.update(id, $scope.user);
            if(status){
                $location.path("#!/users");
            }
        }
    }
]);