<template>
  <div   id="show-blog">
  <h1>博客总览</h1>
  <input type="text" v-model="search" placeholder="搜索">
  <div v-for="blog in filteredBlogs" class = "single-blog">
     <router-link v-bind:to="'/blog/' + blog.id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
     </router-link>
     <article>
          {{blog.content | snippet}}
      </article>
  </div>
  </div>
</template>

<script>
export default {
  name: 'show-blog',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get("https://myblog-2ff38.firebaseio.com/posts.json")
      .then(function (data) {
          return data.json()
          //console.log(data);
          //this.blogs =data.body.slice(0,10);
      })
      .then(function(data){
          var blogArray = [];
          for(let key in data){
              //console.log(key);
              //console.log(data[key]);
              data[key].id = key;
              blogArray.push(data[key]);
          }
            this.blogs=blogArray;
            console.log(this.blogs);
      })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog) =>{ 
              return blog.title.match(this.search);
          })
      }
  }
}
</script>

<style>
#show-blog{
    width: 800px;
    text-align: center;
    margin: 0 auto;
}
.single-blog{
    width:800px;
    text-align: center;
    padding: 20px;
    margin: 20px 0;
    background:#eee;
    border:5px ridge #aaa;
}
#show-blog a{
    color:#444;
    text-decoration: none;
}
input[type="text"]{
    padding:8px;
    box-sizing:border-box;
}
</style>