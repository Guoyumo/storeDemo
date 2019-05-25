require(["zepto", "underscore", "wx",
    "utils/stringUtils",
    "text!store/view/storeItemTpl.html"],
    function ($, _, wx,  stringUtils,storeItemTpl) {
      var storeList = {
        el:{
          $listCont : $(".listCont")
        },
        fakeData : [
          {
            title:'store 1',
            image:'http://static.ainsurtech.com/userfiles/2/files/product/tProductSummary/2017/11/xinchenglogo.jpg'
          },
          {
            title:'store 2',
            image:'http://static.ainsurtech.com/userfiles/2/files/product/tProductSummary/2017/11/xinchenglogo.jpg'
          },
          {
            title:'store 3',
            image:'http://static.ainsurtech.com/userfiles/2/files/product/tProductSummary/2017/11/xinchenglogo.jpg'
          }
        ],
        render:function(){
          var self = this;
          self.el.$listCont.append(_.template(storeItemTpl)({
            storeList: self.fakeData
          }));
        },
        init:function(){
          this.render();
        }
      }

      // 执行函数
    $(function () {
      storeList.init();
      $(".store-item").on('click',function(){
        location.href = "detail.html"
      })
  });
})
