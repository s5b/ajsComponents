'use strict';

/* Controllers */

var myDebug;


function ContactsCtrl($scope) {
    $scope.editor = { editing: false, label: 'Edit', url: '' };
    $scope.contacts = [
        { name: 'Barry', suburb: 'St Kilda', car: 'Mazda' },
        { name: 'Samantha', suburb: 'Glen Waverley', car: 'VW' },
        { name: 'Robert', suburb: 'Fitzroy', car: 'Holden' },
        { name: 'Robyn', suburb: 'Collingwood', car: 'Toyota' },
        { name: 'Stephen', suburb: 'Melbourne', car: 'Hyundai' }
    ];
    $scope.edit_toggle = function () {
        this.editor.editing = !this.editor.editing;
        if (this.editor.editing) {
            console.log('Editing');
            this.editor.label = 'Ok';
            this.editor.url = "partials/edit_contact.html";
        } else {
            console.log('Viewing');
            this.editor.label = 'Edit';
            this.editor.url = '';
        }
    };
    myDebug = $scope;
}




function RecipientsController($scope,$http) {
    var maxRecipientId = 6;
    $scope.url = 'recipients.json';
    $scope.recipientsList = [];
    $scope.recipients = [];

    $scope.name = "Zeke";

//    myDebug = $scope;

//    $scope.fetchRecipients = function() {
//        $http.get($scope.url).then(function(result){
//            $scope.recipientsList = result.data;
//        });
//    };

    $scope.addRecipient = function () {
        maxRecipientId += 1;
        $scope.recipientsList.push({ id: maxRecipientId, name: this.name })
    };

    var initRecipients = function () {
        $scope.recipientsList.push({ id: 1, name: 'Aaron' });
        $scope.recipientsList.push({ id: 2, name: 'Barry' });
        $scope.recipientsList.push({ id: 3, name: 'Carolyn' });
        $scope.recipientsList.push({ id: 4, name: 'Danielle' });
        $scope.recipientsList.push({ id: 5, name: 'Evan' });
    };

    initRecipients();

//    $scope.fetchRecipients();
}
