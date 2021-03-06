/* @Author: Prasad Bidwai
 * @Project: Coding Challenge
 */

var app = angular.module('myApp', []);
var json = {}; // Inititalize the JSON to {} inititally

app.controller('displayCtrlr', function($scope, $http) {


/* 
 * This function will fire an API AJAX 'GET' request and get the dataset.
 */

    $(document).ready(function() {
        var _this = this;
        $.ajax({
                url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members', //Ajax call to receive get 
                type: 'GET',
            })
            .done(function(data) {

                $('#mainTable').css("display","block");
                $('.spinner').css("display","none");

                var _this = this;
                json = data;
                $('#dynatable').dynatable({
                    dataset: {
                        records: json
                    }
                });
            })
            .fail(function() {
                console.error("Failed to Load the API call");
            });

    });

/* 
 * This function will set the display elements of clicked member to show in moreInfo div.
 */

    $scope.updateMoreInfo = function() {

         $("#dynatable tr").click(function(){
         $(this).addClass('selected').siblings().removeClass('selected');    
            var value=$(this).find('td:first').html();
            var value2=$(this).find("td").eq(1).html();
            
            for(var i = 0 ; i < json.length ; i++)
            {
                if(value == json[i].firstName && value2 == json[i].surname)
                {
                    break;
                }
            }
            $scope.newdat = (json[i]);
        });

    }
});