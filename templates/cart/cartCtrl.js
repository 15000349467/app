/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("cartCtrl",function($scope,shopCart){
        $scope.cart = shopCart.findAll();

        // 求总金额
        $scope.money = function(){
            var total = 0;
            // 遍历统计
            angular.forEach($scope.cart,function(item){
                total += item.number * item.product.price;   // 累加金额
            });
            return total;

        };
        $scope.remove = function(title){
            shopCart.remove(title);
        };

    });