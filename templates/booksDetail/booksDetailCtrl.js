/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("booksDetailCtrl", function ($scope,$stateParams,shopCart) {
        // 准备商品数据
        $scope.books = [
            {
                isbn: "TSJD0194",
                title: "极简人类史",
                desc: "新知识青年必读书！掀起“极简阅读”现象级潮流的入门读物，《人民日报》、俞敏洪隆重推荐给大众读者。",
                price: 128.00,
                imgsrc: "images/book01.jpg"
            },
            {
                isbn: "9787541144318",
                title: "林夕：任你行",
                desc: "陈奕迅推荐！华语乐坛金牌词人、《红豆 》《匆匆那年》词作者、畅销经典《原来你非不快乐》作者林夕全新力作！近百篇禅理散文，和你聊聊生活中你我都不得不面对的自由、孤独与选择。",
                price: 31.20,
                imgsrc: "images/book02.jpg"
            },
            {
                isbn: "9787308161459",
                title: "丝绸之路：一部全新的世界史",
                desc: "轰动世界的现象级畅销书，横扫英、美、德、意、土耳其、印度等23个国家。《人民日报》19天内罕见两度推荐。牛津大学资深历史学家全景展现两千年来始终主宰人类文明的世界十字路口，理清“一带一路”的前世今生！",
                price: 89.60,
                imgsrc: "images/book03.jpg"
            },
            {
                isbn: "9787550017702",
                title: "好妈妈胜过好老师2：自由的孩子最自觉",
                desc: "实操性超强的家教书！叛逆、厌学、早熟、二胎、坏朋友、性教育…所有问题，都有答案！《好妈妈胜过好老师》作者突破之作",
                price: 34.40,
                imgsrc: "images/book04.jpg"
            }
        ];

        // 解析参数，查找匹配商品显示
        $scope.book = {};
        angular.forEach($scope.books,function(book){
            if(book.title == $stateParams.title){
                console.log("$stateParams.title:" + $stateParams.title);
                $scope.book = book;
                return false;
            }
        });

        // 响应加入购物车代码
        $scope.add = function(title){
            shopCart.add(title);
        };
    });