<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <foot></foot>
    <gotop></gotop>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import foot from "./components/foot";
import gotop from "./components/gotop";
export default {
  name: 'App',
  components:{
    navbar,
    foot,
    gotop
  }
}
</script>
