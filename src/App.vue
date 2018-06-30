<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>

  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'
import Login from './components/Login'
import Registered from './components/Registered'


export default {
  name: 'app',
  components:{
    AddBlog,ShowBlog,BlogHeader,Login,Registered
  }
}
</script>

<style>
</style>
