/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("detailCtrl", function ($scope,$stateParams,shopCart) {
        //console.log("title:" + $stateParams.title);
        // 准备商品数据
        $scope.products = [
            {title: "火星商品01",price:268.00, desc: "2016冬季最新流行款", imgsrc: "images/TB1_100x100.jpg"},
            {title: "火星商品02",price:568.00, desc: "2016冬季最新流行款", imgsrc: "images/TB2_100x100.jpg"},
            {title: "火星商品03",price:168.00, desc: "2016冬季最新流行款", imgsrc: "images/TB3_100x100.jpg"},
            {title: "火星商品04",price:368.00, desc: "2016冬季最新流行款", imgsrc: "images/TB4_100x100.jpg"}
        ];

        // 解析参数，查找匹配商品显示
        $scope.product = {};
        angular.forEach($scope.products,function(product,index){
            if(product.title == $stateParams.title){
                $scope.product = product;
                return;
            }
            console.log("#" + index);
        });

        // 响应加入购物车代码
        $scope.add = function(product){
            shopCart.add(product);
        };
    });