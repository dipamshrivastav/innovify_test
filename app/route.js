/**
 * Created by Dipam on 10/18/2017.
 */
app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        // routing
        $routeProvider
            .when("/", {
                templateUrl: "views/user/users.html",
                controller: "UsersController"
            })
            .when("/users", {
                templateUrl: "views/user/users.html",
                controller: "UsersController"
            })
            .when("/users/create", {
                templateUrl: "views/user/user.html",
                controller: "CreateUsersController"
            })
            .when("/users/update/:id", {
                templateUrl: "views/user/user.html",
                controller: "UpdateUsersController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);