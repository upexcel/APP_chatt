 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('chatPageFooterDirectiveController', chatPageFooterDirectiveController);

     function chatPageFooterDirectiveController($rootScope, $state, $timeout, $ionicScrollDelegate, chatPageFactory, $ionicLoading, $ionicHistory, timeStorage, socketService, $stateParams, sqliteService, chatpageService) { 
        var self = this;
        var userData = timeStorage.get('userData');
        self.image = userData.data.profile_image;
        self.name = userData.data.name;
        self.user_id = userData.data.user_id;
        self.sendMessage = function() {
            if(self.message == ''){
                console.log('empty');
            } else{
                var currentTimeStamp = _.now();
                sqliteService.saveMessageInDb(self.message, 'post', userData.data.user_id, userData.data.name, userData.data.profile_image, $stateParams.roomId, currentTimeStamp).then(function(lastInsertId){
                    if(timeStorage.get('network')){
                        console.log('do not fire from here');
                    } else{
                        socketService.room_message(lastInsertId, $stateParams.roomId, self.message, currentTimeStamp);
                    }
                    var currentMessage = {
                     "id": lastInsertId,
                     "image": userData.data.profile_image,
                     "message": self.message,
                     "messageTime": moment(currentTimeStamp).format("hh:mm a"),
                     "timeStamp": currentTimeStamp,
                     "name": userData.data.name,
                     "user_id":userData.data.user_id,
                     "message_status":'post'
                    }
                    $rootScope.$broadcast('displayChatMessages', { data: currentMessage });
                    $ionicScrollDelegate.scrollBottom(false);
                    self.message = '';
                })
                 $ionicScrollDelegate.scrollBottom(false);
            }
         }
         self.inputUp = function() {
            console.log('inputUp');
             $timeout(function() {
                 $ionicScrollDelegate.scrollBottom(false);
             }, 300);
         };
         self.inputDown = function() {
            console.log('inputDown');
             $ionicScrollDelegate.resize();
         };
     }
 })();