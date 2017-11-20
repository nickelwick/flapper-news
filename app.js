var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
    $scope.test = 'Hello world!';

    $scope.posts = [
    	{title: 'Post 1', upvotes: 1},
    	{title: 'Post 2', upvotes: 321},
    	{title: 'Post 3', upvotes: 3},
    	{title: 'Post 4', upvotes: 5123},
    	{title: 'Post 5', upvotes: 52},
    ];

    $scope.addPost = function(){

    	if (scope.title == '') {
    		return;
    	}

    	$scope.posts.push({title: $scope.title, upvotes: $scope.upvotes});
    	$scope.title = '';
    }

    $scope.incrementUpvotes = function(post){
        post.upvotes += 1;  
    }

}]);