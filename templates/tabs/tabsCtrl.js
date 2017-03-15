/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("tabsCtrl",function($scope,shopCart){
        var cart = shopCart.findAll();  // 返回购物车中所有的商品数组

        $scope.total = function(){
            var sum = 0;
            angular.forEach(cart,function(item){
                sum += item.number;
            });
            return sum;
        };
    });