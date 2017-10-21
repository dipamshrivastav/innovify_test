/**
 * Created by Dipam on 10/20/2017.
 */
app.controller('LanguageController', ['$scope', '$translate',
    function($scope, $translate) {
        $scope.selectedLanguage = $translate.proposedLanguage();
        $scope.changeLanguage = function (locale) {
            $translate.use(locale);
            $scope.selectedLanguage = $translate.proposedLanguage();
        };
    }
]);