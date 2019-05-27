require(["zepto", "underscore", "wx",
    "utils/stringUtils",
    "text!detail/view/detailTpl.html"
  ],
  function($, _, wx, stringUtils, detailTpl) {
    var detailList = {
      el: {
        $detailItem: $(".detailItem")
      },
      details: {
        name: '阿迪达斯官方adidas neo LITE RACER 男女 休闲鞋 DB0646 DB0647',
        note: '1949年8月18日以adidas AG名字登记。阿迪达斯原本由两兄弟共同开设，在分道扬镳后，阿道夫的哥哥鲁道夫·达斯勒 （Rudolf Dassler）开设了运动品牌puma。其经典广告语：“没有不可能”（Impossible is nothing）。2011年3月，斥资1.6亿欧元启用全新口号——adidas is all in（全倾全力）。',
        image: 'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
        image1: 'http://img3.imgtn.bdimg.com/it/u=3914950518,3569645197&fm=26&gp=0.jpg',
        image2: 'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg',
        image3: 'http://www.cnr.cn/xjfw/btfw/2011btfw/jkwh/jkwt/20160516/W020160516492035673595.jpg',
        qty: '13',
        type: [{
            typeName: "颜色",
            typeItem: ["红色", "黑色", "白色"]
          },
          {
            typeName: "尺码",
            typeItem: ["s", "m", "l", "x", "xl", "xxl"]
          }
        ],
      },

      render: function() {
        var self = this;
        self.el.$detailItem.append(_.template(detailTpl)({
          detailList: self.details
        }));
      },
      init: function() {
        this.render();
      }
    }

    // 执行函数
    $(function() {
      detailList.init();
      $(".choose").on('click', function() {
        $(this).siblings().removeClass("detail-choose");
        $(this).toggleClass("detail-choose");
      })
      $("#detail-buy").on('click', function() {
        location.href = "address.html"
      })
      //计数器
      var MAX = 99,
        MIN = 1;
      $(".weui-count__decrease").click(function(e) {
        var $input = $(e.currentTarget).parent().find('.weui-count__number');
        var number = parseInt($input.val() || "0") - 1
        if (number < MIN) number = MIN;
        $input.val(number)
      })
      $(".weui-count__increase").click(function(e) {
        var $input = $(e.currentTarget).parent().find('.weui-count__number');
        var number = parseInt($input.val() || "0") + 1
        if (number > MAX) number = MAX;
        $input.val(number)
      })
      //swiper
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
        },
        speed: 200,
      });
    })
  })