<template>
  <div>
    <Alert></Alert>
    <div class="container-fluid">
      <Navbar></Navbar>
      <!-- <Alert></Alert> -->
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/dashboard-sidebar'
import Navbar from '../components/dashboard-navbar'
import Alert from '../components/alert'
export default {
  components: {
    Navbar,
    Sidebar,
    Alert
  }
}
</script>
