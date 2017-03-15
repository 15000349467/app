/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("clothesCtrl", function ($scope,$http,$ionicScrollDelegate) {
        // 准备商品数据
        $scope.products = [
            {title: "火星商品01", desc: "2016冬季最新流行款", imgsrc: "images/TB1_100x100.jpg",rating:5},
            {title: "火星商品02", desc: "2016冬季最新流行款", imgsrc: "images/TB2_100x100.jpg",rating:3},
            {title: "火星商品03", desc: "2016冬季最新流行款", imgsrc: "images/TB3_100x100.jpg",rating:4},
            {title: "火星商品04", desc: "2016冬季最新流行款", imgsrc: "images/TB4_100x100.jpg",rating:5}

        ];
        $scope.silderBox=[
            {"imgUrl":"images/lunbo1.jpg"

            },
            {"imgUrl":"images/lunbo2.jpg"},
            {"imgUrl":"images/lunbo3.jpg"},
            {"imgUrl":"images/lunbo4.jpg"}
        ];

        $scope.loadMore = function(){
            // 向服务器请求数据
            $http.get("data.json")
                .success(function(data){
                    // 将返回的数据追加到已有的数据后面
                    Array.prototype.push.apply($scope.products,data);
                })
                .finally(function(){
                    // 通知框架，上拉结束，撤销相应的加载图标
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };

        // 回到顶部
        $scope.top = function(){
            $ionicScrollDelegate.scrollTop(true);
        };
    });