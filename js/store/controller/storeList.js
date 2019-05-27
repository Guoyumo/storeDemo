require(["zepto", "underscore", "wx",
    "utils/stringUtils",
    "text!store/view/storeItemTpl.html"
  ],
  function($, _, wx, stringUtils, storeItemTpl) {
    var storeList = {
      el: {
        $listCont: $(".listCont")
      },
      fakeData: [{
          title: 'Adidas',
          image: 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
          address: '红山区承天商厦5F201'
        },
        {
          title: 'Vans',
          image: 'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          address: '赤峰万达广场3F-201'
        },
        {
          title: 'Iphone',
          image: 'http://img3.imgtn.bdimg.com/it/u=3914950518,3569645197&fm=26&gp=0.jpg',
          address: '花园胡同87号'
        },
        {
          title: 'Nike',
          image: 'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg',
          address: '红山区承天商厦5F201'
        },
        {
          title: 'Appe',
          image: 'http://www.cnr.cn/xjfw/btfw/2011btfw/jkwh/jkwt/20160516/W020160516492035673595.jpg',
          address: '赤峰万达广场3F-201'
        },
        {
          title: '川久保玲',
          image: 'http://pic18.nipic.com/20120204/8339340_144203764154_2.jpg',
          address: '花园胡同87号'
        }
      ],
      render: function() {
        var self = this;
        self.el.$listCont.append(_.template(storeItemTpl)({
          storeList: self.fakeData
        }));
      },
      init: function() {
        this.render();
      }
    }

    // 执行函数
    $(function() {
      storeList.init();
      $(".store-item").on('click', function() {
        location.href = "shop.html"
      })
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
    });
  })