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
                templateUrl: "views/dashboard.html",
                controller: "DashboardController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);