require(["zepto", "underscore", "wx",
    "utils/stringUtils",
    "text!shop/view/shopTpl.html"
  ],
  function($, _, wx, stringUtils, shopTpl) {
    var shop = {
      el: {
        $shoplist: $(".shoplist")
      },
      render: function() {
        var self = this;
        self.el.$shoplist.append(_.template(shopTpl)({}));
      },
      init: function() {
        this.render();
      }
    }

    // 执行函数
    $(function() {
      shop.init();
    });
  })