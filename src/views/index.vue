<template>
  <div>
    <Alert></Alert>
    <side-bar></side-bar>
    <div class="pl-md-8">
      <div class="container">
        <nav-bar></nav-bar>
      </div>
      <router-view />
    </div>
    <footer class="pl-md-8">
      <footer-content></footer-content>
    </footer>
  </div>
</template>

<script>
// 除了後台以外，全部的route都有NavBar、SideBar及Footer，所以將這三個元件放在這邊，另外利用 event bus 來顯示提醒訊息的Alert也建立在這提供index下的子route使用
import Alert from '../components/alert'
import sideBar from '../components/sidebar'
import navBar from '../components/navbar'
import footerContent from '../components/footer-content'
export default {
  components: {
    sideBar,
    navBar,
    footerContent,
    Alert
  }
}
</script>
