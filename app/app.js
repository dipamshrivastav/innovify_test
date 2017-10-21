/**
 * Created by Dipam on 10/18/2017.
 */

var app = angular.module('innovifyTestApp', [
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'ngCookies',
    'pascalprecht.translate'
]);

//localization configuration
app.config(['$translateProvider', function ($translateProvider) {
    var language = navigator.languages ? navigator.languages[0] : navigator.language;
    if (language == undefined) {
        language = "en-US"
    }
    $translateProvider.preferredLanguage(language);

    $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'hi'], {
        'en-*': 'en',
        'fr-*': 'fr',
        'hi-*': 'hi',
        '*': 'en'
    }).determinePreferredLanguage();

    $translateProvider.useStaticFilesLoader({
        prefix: 'data/',
        suffix: '.json'
    });

    $translateProvider.fallbackLanguage('en');
    $translateProvider.useLocalStorage();
}]);