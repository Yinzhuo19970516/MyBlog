<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <router-link :to="'/'">
        <button @click="deleteSingleBlog()">删除</button></router-link>
        <router-link :to="'/edit/'+id"><button>编辑</button></router-link>
    </div>
</template>

<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get("https://myblog-2ff38.firebaseio.com/posts/"+this.id+".json")
            .then(function(data){
					console.log(data);
					return data.json();
					// this.blog = data.body;
				})
				.then(function(data){
					this.blog = data;
                })
    },
    methods:{
        deleteSingleBlog(){
            this.$http.delete("https://myblog-2ff38.firebaseio.com/posts/"+this.id+".json")
                .then(response =>{
                    this.$router.push({path:"./" })
                })
        }
    }
}
</script>
<style>
#single-blog{
    max-width:800px;
    margin: 0 auto;
    padding:20px;
    background: #eeeeee;
    border: 5px ridge #aaa;
}
button{
  display: inline-block;
  margin: 4px 2px;
  background: blue;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
 
}
    



</style>
