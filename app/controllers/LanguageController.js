/**
 * Created by Dipam on 10/20/2017.
 */
app.controller('LanguageController', ['$scope', '$translate',
    function($scope, $translate) {
        $scope.selectedLanguage = "English";
        $scope.changeLanguage = function (locale, language) {
            $scope.selectedLanguage = language;
            $translate.use(locale);
        };
    }
]);