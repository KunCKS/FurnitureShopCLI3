<template>
  <div class="side-nav" id="sideNav">
    <a href="#" class="menuBtn d-md-block d-none" @click.stop="flyoutShown" id="menuBtn">
      <div class="btnBar"></div>
      <div class="btnBar"></div>
      <div class="btnBar"></div>
    </a>
    <div class="side-bar d-md-block d-none">
      <h3 class="side-bar-title m-0">ASIN DESIGN SENCE 2019</h3>
    </div>
    <nav class="flyout negative-row-margin">
      <div class="flyout-content">
        <!-- 以下為折疊的List -->
        <ul class="navbar-nav p-0" id="accordion">
          <li class="nav-item">
            <div class="card border-0">
              <div class="card-header p-0 border-0 bg-white" id="headingOne">
                <h5 class="mb-0">
                  <button
                    id="btncolla"
                    class="btn btn-link dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >沙發 SOFAS</button>
                </h5>
              </div>
              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <ul class="navbar-nav mr-auto">
                    <li
                      class="nav-item"
                      v-for="item in seriesList"
                      :key="item"
                      @click="flyoutShown"
                    >
                      <router-link class="nav-link" :to="`/products/沙發/${item}`">{{item}} 系列</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <div class="card border-0">
              <div class="card-header p-0 border-0 bg-white" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                  >椅子 CHAIRS</button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <ul class="navbar-nav mr-auto">
                    <li
                      class="nav-item"
                      v-for="item in seriesList"
                      :key="item"
                      @click="flyoutShown"
                    >
                      <router-link class="nav-link" :to="`/products/椅子/${item}`">{{item}} 系列</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <div class="card border-0">
              <div class="card-header p-0 border-0 bg-white" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >桌子 TABLES</button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  <ul class="navbar-nav mr-auto">
                    <li
                      class="nav-item"
                      v-for="item in seriesList"
                      :key="item"
                      @click="flyoutShown"
                    >
                      <router-link class="nav-link" :to="`/products/桌子/${item}`">{{item}} 系列</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <div class="card border-0">
              <div class="card-header p-0 border-0 bg-white" id="headingFour">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                  >收納系列 STORAGE</button>
                </h5>
              </div>
              <div id="collapseFour" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  <ul class="navbar-nav mr-auto">
                    <li
                      class="nav-item"
                      v-for="item in seriesList"
                      :key="item"
                      @click="flyoutShown"
                    >
                      <router-link class="nav-link" :to="`/products/收納系列/${item}`">{{item}} 系列</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="flyout-content-footer">ASIN DESIGN SENCE 2019</div>
      </div>
    </nav>
  </div>
</template>

<script>
// template中 選單以router-link 來導向中文名的route，到products頁面時會利用route取得值來進行資料的filter。
import $ from 'jquery'
export default {
  data () {
    return {
      seriesList: []
    }
  },
  methods: {
    flyoutShown () {
      $('#menuBtn').toggleClass('menuBtn-shown')
      $('#sideNav').toggleClass('show')
      // $("#menuBtnInNavBar").toggleClass("menuBtn-shown");
      // 點擊替換className達到sidebar動畫效果
    },
    getProductData () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.$http.get(api).then(response => {
        // console.log("產品頁面取得資料：", response);
        vm.seriesList = response.data.products
          .map(item => {
            return item.category_series
          })
          .filter((item, index, arr) => {
            return arr.indexOf(item) === index
          })
        vm.seriesList.unshift('所有')
        // 用於抓取商品的series
        // 相關內容說明可以看productList.vue
      })
    }
  },
  created () {
    const vm = this
    vm.getProductData()
    // 當collapse打開時，若點擊其他區域則自動關閉
    // 說明：這邊的設定基準是當點擊目標不是帶有特定class的dom且選單為開啟時則選單關閉，另外為防止打開sidebar flyout內容時點擊其內容造成flyout關閉
    // 增加了當點擊dom元素 closest('.flyout') 條件不成立（父元素包含flyout）時，才執行選單關閉
    // 最後原觀察menuBtn時會發現函式都會觸發兩次，造成flyout無法打開，這是因為冒泡事件的關係，所以在click上添加修飾符.stop來防止
    $(document).on('click', e => {
      let collapseShown = $('.collapse').hasClass('show')
      let sideNavShown = $('#menuBtn').hasClass('menuBtn-shown')
      // console.log($(e.target).closest('#menuBtn').length, $(e.target).closest('.flyout').length)
      if (!$(e.target).is('.btn,.btn-link,.dropdown-toggle') && collapseShown) {
        $('.collapse').collapse('hide')
      } else if (!$(e.target).closest('.flyout').length && !$(e.target).is('#menuBtn') && sideNavShown) {
        vm.flyoutShown()
      }
    })
  }
}
</script>
