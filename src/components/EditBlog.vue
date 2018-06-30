<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>技术</label>
        <input type="checkbox" value="技术" v-model="blog.categories">
        <label>生活</label>
        <input type="checkbox" value="生活" v-model="blog.categories">
        <label>电影</label>
        <input type="checkbox" value="电影" v-model="blog.categories">
        <label>书籍</label>
        <input type="checkbox" value="书籍" v-model="blog.categories">
        <label>其他</label>
        <input type="checkbox" value="其他" v-model="blog.categories">
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>

    <div v-if="submmited">
      <h3>您的博客发布成功!</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题: {{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p v-for="category in blog.categories">
         博客分类：{{category}}</p>
      <p>作者: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
      id:this.$route.params.id,
      blog:{},
      authors:["尹卓","yinzhuo","dazhuo"],
      submmited:false
    }
  },
  methods:{
    fetchData(){
      // console.log(this.id);
      this.$http.get('https://myblog-2ff38.firebaseio.com/posts/' + this.id + ".json")
          .then(response => {
            // console.log(response.body);
            this.blog = response.body;
          })
    },
    post:function(){
      this.$http.put('https://myblog-2ff38.firebaseio.com/posts/' + this.id + ".json",this.blog)
          .then(function(data){
            console.log(data);
            this.submmited = true;
          });
    }
  },
  created(){
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 200px;
}

#checkboxes label{
  display: inline-block;
  margin-top: 0;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: blue;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}

</style>

