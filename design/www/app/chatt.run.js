(function() {
    'use strict';

    angular.module('starter')

    .run(function($ionicPlatform, timeStorage, $state, Configurations, deviceService, pushNotification, lastUsesTimeService, $localStorage) {
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
        if($localStorage.userData){
            $state.go('app.contacts');
        } else{
            $state.go('login');
        }
        document.addEventListener("deviceready", function() {
            console.log("device uuid: " + deviceService.getuuid());
            pushNotification.push();
            lastUsesTimeService.updateTimeWithHttp();
            document.addEventListener("pause", onPause, false);
            document.addEventListener("resume", onResume, false);
            function onPause() {
                lastUsesTimeService.updateTime();
            }
            function onResume() {
                lastUsesTimeService.updateTime();
            }
        });


    });

})();