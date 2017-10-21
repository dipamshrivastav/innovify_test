/**
 * Created by Dipam on 10/20/2017.
 */
app.controller('UsersController', ['$scope', 'UserService',
    function($scope, UserService) {

        //getUsers is used to get user list
        $scope.getUsers = function(){
            $scope.users = UserService.getUsers();
        }

        //deleteUser is used when user click on delete icon
        $scope.deleteUser = function(id){
            UserService.delete(id);
            $scope.getUsers();
        }

        $scope.getUsers();
    }
]);