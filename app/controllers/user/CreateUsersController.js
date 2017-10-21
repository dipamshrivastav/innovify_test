/**
 * Created by Dipam on 10/20/2017.
 */
app.controller('CreateUsersController', ['$scope', 'UserService', '$location',
    function($scope, UserService, $location) {
        $scope.isEdit = false;

        //createUser is used when user click on Save
        $scope.createUser = function(){
            var status = UserService.create($scope.user);
            if(status)
                $location.path("#!/users");
        }
    }
]);