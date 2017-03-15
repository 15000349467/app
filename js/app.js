/**
 * Created by hxsd on 2016/12/22.
 */
angular.module("myapp", ["ionic"]);

// 配置路由
angular.module("myapp")
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        // 去掉后退按钮的文字
        $ionicConfigProvider.backButton.text("");
        $ionicConfigProvider.backButton.previousTitleText("");

        // 配置路由
        $stateProvider
            .state('tour',{
                url:'/tour',
                templateUrl:'templates/tour/tour.html'
            })
            // 一级路由：加载tabs.html，但不要直接显示
            .state("tabs",{
                url:"/tabs",
                abstract:true,  // 抽象地，意思是不直接显示
                templateUrl:"templates/tabs/tabs.html",
                controller:"tabsCtrl"
            })
            // 二级路由
            .state("tabs.clothes",{
                url:"/clothes",
                views:{"tab-clothes":{
                    templateUrl:"templates/clothes/clothes.html",
                    controller:"clothesCtrl"
                }}
            })
            .state("tabs.detail",{
                url:"/detail?:title",
                views:{"tab-clothes":{
                    templateUrl:"templates/detail/detail.html",
                    controller:"detailCtrl"
                }}
            })
            .state("tabs.books",{
                url:"/books",
                views:{"tab-books":{
                    templateUrl:"templates/books/books.html",
                    controller:"booksCtrl"
                }}
            })
            .state("tabs.booksDetail",{
                url:"/booksDetail?:title",
                views:{"tab-books":{
                    templateUrl:"templates/booksDetail/book_detail.html",
                    controller:"booksDetailCtrl"
                }}
            })
            .state("tabs.cart",{
                url:"/cart",
                views:{"tab-cart":{
                    templateUrl:"templates/cart/cart.html",
                    controller:"cartCtrl"
                }}
            });
        // 默认首页
        $urlRouterProvider.otherwise("/tour");
    });