// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

.state('app.captureimg', {
      url: '/captureimg',
      views: {
        'menuContent': {
          templateUrl: 'captureimg/captureimg.html'

        }
      }
    })

.state('app.contactus', {
      url: '/contactus',
      views: {
        'menuContent': {
          templateUrl: 'contactus/contactus.html'
        }
      }
    })
.state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent': {
          templateUrl: 'feedback/feedback.html'
        }
      }
    })
.state('app.logout', {
      url: '/logout',
      views: {
        'menuContent': {
          templateUrl: 'logout/logout.html'
        }
      }
    })



    .state('app.profile', {
      url: '/profiles',
      views: {
        'menuContent': {
          templateUrl: 'profile/profiles.html',
          controller: 'ProfilesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/profiles/:profileId',
    views: {
      'menuContent': {
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/profiles');
});
