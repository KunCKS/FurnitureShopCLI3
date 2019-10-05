(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22892e"],{da83:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container pt-md-3 pb-md-5 section-full-height"},[s("loading",{attrs:{active:t.status.isLoading},on:{"update:active":function(a){return t.$set(t.status,"isLoading",a)}}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-7"},[s("div",{staticClass:"h4 text-center"},[t._v("購 物 車 清 單")]),t.cartData.carts.length>=1?s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.cartData.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm border-0",attrs:{type:"button"},on:{click:function(s){return t.removeCartItem(a.id)}}},[t.status.currentProductId!==a.id?s("i",{staticClass:"far fa-trash-alt"}):t._e(),t.status.currentProductId===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()])]),s("td",{staticClass:"align-middle",attrs:{width:"42"}},[s("div",{staticClass:"bg-cover",style:"background-image:url('"+a.product.imageUrl+"');width: 42px;height:42px"})]),s("td",{staticClass:"align-middle"},[s("div",{staticClass:"text-muted"},[s("span",{staticClass:"d-md-inline-block d-none"},[t._v(t._s(a.product.category_series))]),t._v("\n                "+t._s(a.product.title)+"\n              ")])]),s("td",{staticClass:"align-middle text-right d-md-table-cell d-none"},[s("span",{staticClass:"text-success"},[t._v(t._s(t._f("currency")(a.product.price)))]),s("del",{staticClass:"text-muted"},[t._v(t._s(t._f("currency")(a.product.origin_price)))])]),s("td",{staticClass:"align-middle text-center"},[s("div",{},[t._v(t._s(a.qty)+"/"+t._s(a.product.unit))])]),s("td",{staticClass:"align-middle text-right"},[s("span",{},[t._v(t._s(t._f("currency")(a.product.price*a.qty)))])])])})),0)]):t._e(),t.cartData.carts.length<1?s("div",{staticClass:"py-6 text-center border-top border-bottom"},[s("div",{staticClass:"h5"},[t._v("購物車沒有商品喔！")]),s("router-link",{staticClass:"btn btn-primary mt-3",attrs:{to:"/products"}},[t._v("繼續購物")])],1):t._e()]),s("div",{staticClass:"col-md-5 my-md-0 my-2"},[s("div",{staticClass:"border p-3 shadow"},[s("div",{staticClass:"h5 text-center border-bottom pb-2"},[t._v("購 物 車 合 計")]),s("div",{staticClass:"d-flex py-2"},[s("h6",[t._v("總計")]),t.cartData.total?s("span",{staticClass:"ml-auto"},[t._v(t._s(t._f("currency")(t.cartData.total)))]):t._e()]),t.cartData.final_total<t.cartData.total?s("div",{staticClass:"d-flex py-2"},[t._m(1),s("span",{staticClass:"ml-auto text-success"},[t._v(t._s(t._f("currency")(t.cartData.final_total)))])]):t._e(),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",staticStyle:{"font-size":"0.875rem"},attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.useCoupon(a)},input:function(a){a.target.composing||(t.couponCode=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button",id:"button-addon2"},on:{click:t.useCoupon}},[t._v("套用優惠碼")])])]),s("small",{staticClass:"ml-auto text-success py-1 d-block mb-3"},[t.cartData.final_total>=t.cartData.total?s("span",[t._v("現在輸入OPEN50OFF即可享有折扣價喔!")]):t._e()]),s("router-link",{staticClass:"btn btn-outline-success btn-block",class:{disabled:t.cartData.carts.length<1},attrs:{to:"/CustomerOrder"}},[t._v("前往結帳")])],1)])])],1)},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",{attrs:{width:"25"}}),s("th",{attrs:{colspan:"2"}},[t._v("品名")]),s("th",{staticClass:"d-md-table-cell d-none",attrs:{width:"90"}},[t._v("單價")]),s("th",{staticClass:"text-center",attrs:{width:"75"}},[t._v("數量")]),s("th",{attrs:{width:"90"}},[t._v("小計")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex"},[s("h6",[t._v("折扣價")]),s("small",{staticClass:"text-success"},[t._v("(已套用coupon優惠)")])])}],i=s("1157"),n=s.n(i),r={data:function(){return{cartData:{carts:{0:{product:{imageUrl:""}}}},status:{isLoading:!1,currentProductId:""},couponCode:""}},methods:{getCartData:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("komu","/cart");t.$http.get(a).then((function(a){t.cartData=a.data.data}))},removeCartItem:function(t){var a=this;n()(event.target).attr("disabled",!0),a.status.currentProductId=t;var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("komu","/cart/").concat(t);a.$http.delete(s).then((function(t){a.$bus.$emit("reGetCart"),a.getCartData()}))},useCoupon:function(){var t=this;t.status.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("komu","/coupon"),s={code:t.couponCode};t.$http.post(a,{data:s}).then((function(a){a.data.success?(t.cartData.final_total=a.data.data.final_total,t.$bus.$emit("message:push",a.data.message,"success"),t.status.isLoading=!1):(t.$bus.$emit("message:push",a.data.message,"danger"),t.status.isLoading=!1)}))}},created:function(){var t=this;this.getCartData(),this.$bus.$on("reGetCart",(function(){t.getCartData()}))}},o=r,d=s("2877"),l=Object(d["a"])(o,e,c,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22892e.588c783f.js.map