 (function() {
     'use strict';
     angular.module('chattapp')
         .factory('sqliteService', sqliteService);

     function sqliteService($ionicPlatform, $q, timeStorage, timeZoneService) {
         var service = {};
         service.createTable = function() {
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(createSchema, errorInSchema, successInSchema);
                 function createSchema(tx) {
                     tx.executeSql('CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY AUTOINCREMENT, message_id TEXT, message TEXT, message_status TEXT, user_id TEXT, user_name TEXT, user_profile_image TEXT, roomId TEXT, message_type TEXT,  messageTime INTEGER)');
                 }
                 function errorInSchema() {
                     console.log("Error to create schema");
                 }
                 function successInSchema() {
                     console.log("Schema creation successful");
                 }
             },
             service.saveMessageInDb = function(message, message_status, user_id, user_name, user_profile_image, roomId, messageTime) {
                var q = $q.defer();
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(populateDB, error, success);
                 function populateDB(tx) {
                     tx.executeSql('INSERT INTO messages(message, message_status, user_id, user_name,user_profile_image, roomId, messageTime) VALUES ("' + message + '","' + message_status + '","' + user_id + '","' + user_name + '", "' + user_profile_image + '", "' + roomId + '", "'+ messageTime +'")',[],function(tx, results){
                        q.resolve(results.insertId);
                     });
                 }
                 function error(err) {
                     console.log("Error processing SQL: " + err.code);
                     q.reject(err);
                 }
                 function success(results) {
                     console.log("New Data Inserted!");
                 }
                 return q.promise;
             },
             service.updateMessageStatusToSent = function(localMessageId, messageId, messageTime) {
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(populateDB, error, success);
                 function populateDB(tx) {
                     tx.executeSql("UPDATE messages SET message_id='"+messageId+"', messageTime='"+messageTime+"', message_status='sent' WHERE id="+localMessageId);
                 }
                 function error(err) {
                     console.log("Error processing SQL: " + err.code);
                 }
                 function success() {
                     console.log("successfully updated to sent!");
                 }
             },
             service.updateMessageStatusToSeen = function(messageId) {
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(populateDB, error, success);
                 function populateDB(tx) {
                     tx.executeSql("UPDATE messages SET message_status= 'seen' WHERE message_id= '"+messageId+"'");
                 }
                 function error(err) {
                     console.log("Error processing SQL: " + err.code);
                 }
                 function success() {
                     console.log("successfully updated to SEEN!");
                 }
             },
             service.gotNewRoomMessage = function(message, message_id, message_status, message_time, user_name, user_profile_image, room_id) {
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(populateDB, error, success);
                 function populateDB(tx) {
                     tx.executeSql('INSERT INTO messages(message, message_status, message_id, user_name,user_profile_image, roomId, messageTime) VALUES ("' + message + '","' + message_status + '","' + message_id + '","' + user_name + '", "' + user_profile_image + '", "' + room_id + '", "' + message_time + '")',[],function(tx, results){
                        // console.log(results.insertId);
                     });
                 }
                 function error(err) {
                     console.log("Error processing SQL: " + err.code);
                 }
                 function success(results) {
                     console.log("New Data Inserted On New Room Messages!");
                 }
             },
             service.updateDbOnRoomOpen = function(messages, roomId) {
                var q = $q.defer();
                var userData = timeStorage.get('userData');
                var newmes=[];
                angular.copy(messages,newmes);
                service.getMessageDataFromDB(roomId).then(function(response){
                    var k=0;
                    for(var i = 0; i < messages.length; i++){
                        for(var j = 0; j < response.length; j++){
                            if(messages[i].id == response[j].id){
                                newmes.splice(i-k,1);
                               k=k+1;
                            }
                        }
                    }
                    for(var k = 0; k < newmes.length; k++){
                        service.gotNewRoomMessage(newmes[k].message.body, newmes[k].id, newmes[k].message_status, newmes[k].message_time, newmes[k].message_owner.name, newmes[k].message_owner.profile_image, newmes[k].room_id);
                    }
                    for(var x = 0; x < messages.length; x++){
                        if(messages[x].message_status == 'seen'){
                            service.updateMessageStatusToSeen(messages[x].id);
                        }
                    }
                    q.resolve('resole');
                });
                return q.promise;
             },
             service.getMessageDataFromDB = function(roomId) {
                var q = $q.defer();
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(populateDB, error, success);
                 function populateDB(tx) {
                     tx.executeSql("select * from messages WHERE roomId= '"+roomId+"' order by id DESC limit 20;",[],function(tx, results){
                        var roomMessages = [];
                        for (var i = 0; i < results.rows.length; i++) {
                                 var newData = {};
                                 newData.id = results.rows.item(i).message_id;
                                 newData.message = results.rows.item(i).message;
                                 newData.messageTime = moment.unix(results.rows.item(i).messageTime).tz(timeZoneService.getTimeZone()).format("hh:mm a");
                                 newData.timeStamp = results.rows.item(i).messageTime;
                                 newData.name = results.rows.item(i).user_name;
                                 newData.user_id = results.rows.item(i).user_id;
                                 newData.image = results.rows.item(i).user_profile_image;
                                 newData.message_status = results.rows.item(i).message_status;
                                 roomMessages.push(newData);
                            }
                        q.resolve(roomMessages);
                     });
                 }
                 function error(err) {
                     console.log("Error processing SQL: " + err.code);
                     q.reject(err);
                 }
                 function success(results) {
                     console.log("Data is fetched from db");
                 }
                 return q.promise;
             },
             service.deviceIsNowOnline = function() {
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(populateDB, error, success);
                 function populateDB(tx) {
                     tx.executeSql("select * from messages WHERE message_status='post'",[],function(tx, results){
                        var userData = timeStorage.get('userData');
                        var accessToken = userData.data.access_token;
                        for (var i = 0; i < results.rows.length; i++) {
                            socket.emit('room_message', results.rows.item(i).id, accessToken, results.rows.item(i).roomId, results.rows.item(i).message, _.now());
                            }
                     });
                 }
                 function error(err) {
                     console.log("Error processing SQL: " + err.code);
                 }
                 function success(results) {
                     console.log("Data is fetched from db");
                 }
             }
         return service;
     };

 })();