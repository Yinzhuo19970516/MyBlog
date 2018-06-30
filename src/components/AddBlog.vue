<template>
  <div id="add-blog">
 <h2>添加博客</h2>
 <form v-if="!submmited">
     <label>博客标题</label>
     <input type ="text" v-model="blog.title" required/>
     
     <label>博客内容</label>
     <textarea v-model="blog.content"></textarea>

     <div id="checkboxes">
         <label>技术</label>
         <input type="checkbox" value ="技术" 
         v-model="blog.categories">
         <label>生活</label>
         <input type="checkbox" value ="生活"
           v-model="blog.categories">
         <label>电影</label>
         <input type="checkbox" value ="电影"
           v-model="blog.categories">
         <label>书籍</label>
         <input type="checkbox" value ="书籍"
           v-model="blog.categories">
           <label>其他</label>
         <input type="checkbox" value ="其他"
           v-model="blog.categories">
     </div>
     <label>作者：</label>
     <select v-model="blog.author">
         <option v-for="author in authors">
             {{author}}
         </option>
     </select>
     <button v-on:click.prevent="post">添加博客</button>
 </form>

 <div v-if="submmited">
     <h3>您的博客发布成功！</h3>
 </div>

 <div id="preview">
     <h3>博客总览</h3>
     <p>博客标题：{{blog.title}}</p>
     <p>博客内容：</p>
     <p>{{blog.content}}</p>
     <p>博客分类：</p>
     <ul>
         <li v-for="category in blog.categories">
             {{category}}
         </li>
     </ul>
     <p>作者：{{blog.author}}</p>
 </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
     blog:{
         title:"",
         content:"",
         categories:[],
         author:""
     },
     authors:["尹卓","yinzhuo","dazhuo"],
     submmited:false,
    }
  },
  methods:{
      post:function(){
          this.$http.post("https://myblog-2ff38.firebaseio.com/posts.json",this.blog)
             .then(function(data){
                console.log(data);
                this.submmited=true;
          });
      }
  }
}
</script>


<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding:20px;
}
label{
    display:block;
    margin:20px 0 10px;
}
input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding:8px;
}
#checkboxes label{
    display:inline-block;
    margin-top: 0;
}
#checkboxes input{
    display:inline-block;
    margin-right: 10px;
}
button{
    display: block;
    margin:20px 0;
    background:blue;
    color:#fff;
    border:0;
    padding:14px;
    border-radius: 4px;
    font-size: 18px;
    cursor:pointer;
}
#preview{
    padding:10px 20px;
    border: 5px ridge #fff;
    margin: 30px,0;
}
h3{
    margin-top: 10px;

}
textarea{
    height:200px;
}


</style>
