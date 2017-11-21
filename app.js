var app = angular.module('flapperNews', []);
angular.module('flapperNews', ['ui.router'])

app.factory('posts', [function () {
    
    var o = {
        posts: []
    };    

    return o;
}])

// Create the config block for our app and configure a home state using $stateProvider and $urlRouterProvider.
app.config([

    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
            })
            .state('posts',{
                url: '/posts/{id}',
                templateUrl: '/posts.html',
                controller: 'PostsCtrl'
            });

        $urlRouterProvider.otherwise('home');

}]);


// Controllers

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

    $scope.posts = posts.posts;
    $scope.test = 'Hello world!';

    $scope.addPost = function(){

    	if ($scope.title == '') {
    		return;
    	}

    	$scope.posts.push({
            title: $scope.title, 
            link: $scope.link,
            upvotes: 0
        });
    	$scope.title = '';
        $scope.link = '';


        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
        });

    }



    $scope.incrementUpvotes = function(post){
        post.upvotes += 1;  
    }

}]);


app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function ($scope, $stateParams, posts) {
        
}]);