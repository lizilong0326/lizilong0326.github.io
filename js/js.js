var app = angular.module("myApp", ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "../views/home.html"
        }).state('work', {
            url: '/work',
            templateUrl: "../views/work.html",
            controller: "findCtrl"
        }).state('about', {
            url: '/about',
            templateUrl: "../views/about.html"
        }).state('contenct', {
            url: '/contenct',
            templateUrl: "../views/contenct.html"
        })



}]);
app.directive("textclose", function () {
        return {
            restrict: "C",
            link:function(scope, element, attrs){
            	$(".dts dt").hover(function(){
            		$(this).find(".hide").stop().animate({opacity:"1"});
            	},function(){
            		$(this).find(".hide").stop().animate({opacity:"0"});
            	})
            }

        }

    }).directive("bodyhide", function () {
        return {
            restrict: "C",
            link:function(scope, element, attrs){
            	setTimeout(function(){
            		$(".loding").stop().animate({opacity:"0"});
            		$(".wrap").stop().animate({opacity:"1"},2000);
            	},3000)
            }

        }

    })
app.controller('findCtrl', function ($scope) {
    $scope.init = function (name, h) {
    	 document.documentElement.scrollTop = document.body.scrollTop =0;
        var stt = '<div class="addbox"><span class="remove"></span></div>';
        $("body").append(stt);
        var str = '<div class="addimgs"><img class = "addimg" src = "' + name + '" alt = "" ></div>';
        $("body").append(str);
        $(".addbox").height(h)
        $(".remove").on("click", function () {
            $(".addbox").remove();
            $(".addimgs").remove();
        })
        $(".addbox").on("click", function () {
            $(".addbox").remove();
            $(".addimgs").remove();
        })
    }
    $scope.inits = function (h) {
    	 document.documentElement.scrollTop = document.body.scrollTop =0;
        var stt = '<div class="addbox"><span class="remove"></span></div>';
        $("body").append(stt);
        var str = '<div class="addimgs" style="background:#FFFFFF"><img src = "../imgs/1.jpg" alt = "" ><img src = "../imgs/gif4.gif" alt = "" ><img src = "../imgs/gif1.gif" alt = "" ><img  src = "../imgs/gif2.gif" alt = "" ><img src = "../imgs/gif3.gif" alt = "" ><img src = "../imgs/3.jpg" alt = "" ></div>';
        $("body").append(str);
        $(".addbox").height(h)
        $(".remove").on("click", function () {
            $(".addbox").remove();
            $(".addimgs").remove();
        })
        $(".addbox").on("click", function () {
            $(".addbox").remove();
            $(".addimgs").remove();
        })
    }
})