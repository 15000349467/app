/**
 * Created by hxsd on 2016/12/22.
 */
// 自定义一个购物车service
angular.module("myapp")
    .factory("shopCart",function(){
        var cart = [];
        return {
            // 将商品加入购物车的方法
            add:function(product){
                // 遍历购物筐
                for(var i=0;i<cart.length;i++){
                    var item = cart[i]; // 购物筐中的每一项
                    if(item.product.title == product.title){
                        // 说明购物车中已有该商品，需要修改购买数量
                        item.number++;
                        return;     // 结束函数的执行
                    }
                }
                // 如果执行到这里，说明添加的是一个新的商品
                cart.push({product:product,number:1});
            },
            // 按名称删除
            remove:function(title){
                // 遍历购物筐
                for(var i=0;i<cart.length;i++){
                    var item = cart[i]; // 购物筐中的每一项
                    if(item.product.title == title){
                        // 说明找到了要删除的商品
                        cart.splice(i,1);
                        break;
                    }
                }
            },
            // 查看购物车中所有商品的方法
            findAll:function(){
                return cart;
            },
            // 清空购物车
            clear:function(){
                cart.length = 0;
            }
        };
    });